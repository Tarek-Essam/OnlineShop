import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import {FormGroup , FormControl , Validators} from '@angular/forms';
import {AbstractControl, ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  private userData:any;
  private isAuthToEdit : boolean = true;
  private image : any;
  private perviewImage: any;
  private displayImage:boolean = false;
  private updated :boolean;
  private submitted:boolean = false;
  form = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required , Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
    password: new FormControl('',Validators.required),
    password2: new FormControl('', Validators.required),
    address: new FormControl('',Validators.required),
  });

  constructor(private loginSer: LoginService , private router : Router) { }

  get username(){
    return this.form.get('userName');
  }
  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get password2(){
    return this.form.get('password2');
  }

  get address(){
    return this.form.get('address');
  }

  ngOnInit() {
    this.loginSer.getUserInfo().subscribe((res)=>{
      var {user} = res;
      this.userData = user;
      console.log(user)
      if (user.userType) {
        this.isAuthToEdit = true;
        this.form.get('userName').reset(`${user.name}`);
        this.form.get('email').reset(`${user.email}`);
        if (user.address) {
            this.form.get('address').reset(`${user.address}`);
        }
        if (user.image) {
            this.displayImage = true;
            this.perviewImage = user.image;
        }
      }
      else{
        this.isAuthToEdit = false;
      }
    },(err)=>{console.log(err)})
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

   checkIfMatchingPasswords() {
      this.form.get('password').value === this.form.get('password2').value
      ? null : this.form.get('password2').setErrors({mismatch:true});
    }

    submit(){
      this.form.value.image = this.image;
      this.submitted = true;
      console.log(this.userData.id)
      return this.loginSer.updateUser(this.form.value , this.userData.id).subscribe((res : any) => {
        console.log(res)
        this.router.navigate(["/"]);
      // this.form.get('userName').reset()
      this.updated = true;
    } , err => {
      console.log(err)
      this.updated = false;
    })
    }

}
