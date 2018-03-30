import {AuthService,GoogleLoginProvider,FacebookLoginProvider} from 'angular5-social-login';
import { Component , OnInit , HostListener } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { RegisterComponent } from '../register/register.component';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private keepMeLooged: boolean = true;
  private loggedIn : boolean = false;
  private notAuth : boolean = false;
  private isModalHidden: boolean = true;
  private tokenObj :any;
  private title = 'Login Page';
  private token: any;
  private currentToken: any;
  private userSocialData : object;
  private forgetPass : boolean = false;

  constructor(private loginSer: LoginService , protected storage: AsyncLocalStorage , private socialAuthService: AuthService){ }

  ngOnInit(){
    this.storage.getItem('token').subscribe(
      (res : any) => {
        if(res){
          this.loginSer.onStartLogIn(res).subscribe((result : any) => {
            if(result.logIn == "Login Now"){
              this.loggedIn = true;
              this.loginSer.setUserInfo(result.user);
            }},
            (err : any) => {this.loggedIn = false})}
            else{
              this.loggedIn = false;
            }});
          }

          // local login email & pass
  login(email , pass){
    this.loginSer.getToken(email , pass).subscribe((res: any)=>{
      if (res.resp != "invalid username and password") {
        this.tokenObj = res;
        this.loginSer.setUserInfo(res.user);
        this.storage.setItem('provider',`${this.tokenObj.resp}`).subscribe(() => {this.loggedIn = true});
        this.storage.setItem('token',`${this.tokenObj.token}`).subscribe(() => {this.loggedIn = true});
      }
      else{
        this.loggedIn = false;
        this.notAuth = true;
        }
      });
    }
        // logOut from local login and social as well
    logOut(){
      if (this.userSocialData) {
        this.storage.removeItem('token').subscribe(() => {this.loggedIn = false}, (err) => {console.log(err)});
        this.storage.removeItem('provider').subscribe(() => {this.loggedIn = false}, (err) => {console.log(err)});
        this.loginSer.setUserInfo({});
        this.socialAuthService.signOut();
      }
      else{
        this.loginSer.setUserInfo({});
        this.storage.removeItem('token').subscribe(() => {this.loggedIn = false}, (err) => {console.log(err)});
        this.storage.removeItem('provider').subscribe(() => {this.loggedIn = false}, (err) => {console.log(err)});
      }
        this.loggedIn = false;
    }

    socialSignIn(socialPlatform : string) {
      let socialPlatformProvider;
      if(socialPlatform == "facebook"){
        socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      }else if(socialPlatform == "google"){
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }

      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          this.userSocialData = {
            "email":userData.email,
            "image":userData.image,
            "name":userData.name,
            "provider":userData.provider,
            "token":userData.token,
            "idToken":userData.idToken
          };
          this.loginSer.getSocialToken(this.userSocialData).subscribe((res: any)=>{
            if (res.resp != "invalid username and password") {
              this.tokenObj = res;
              this.loginSer.setUserInfo(res.user);
              this.storage.setItem('provider',`${this.tokenObj.resp}`).subscribe(() => {this.loggedIn = true});
              this.storage.setItem('token',`${this.tokenObj.token}`).subscribe(() => {this.loggedIn = true});
            }
            else{
              this.loggedIn = false;
            }
          });
        });
      }

    modalHidde(){
      this.isModalHidden != this.isModalHidden;
    }

    forgetPassword(){
      this.forgetPass = !this.forgetPass;
    }

    @HostListener('window:beforeunload', this)
    public beforeunloadHandler(this) {
      if (!this.keepMeLooged) {
        this.logOut();
      }
    }

    @HostListener('window:click', this)
    public clickHandler(this) {
      this.notAuth = false;
    }

}
