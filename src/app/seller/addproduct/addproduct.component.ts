import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AddproductService } from '../../addproduct.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../categories.service';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  subcats:any;
  res:any;
  userInfo:any;
  userID:any;
  model = {
    productName: '',
    productPrice: '',
    pcs: '',
    productDesc: '',
    image: '',
    subcat:'',
    offer:'',
    userId : ''
  };

  @ViewChild('fileInput') fileInput: ElementRef;
  // private AddproductService: AddproductService
  constructor(private AddproductService: AddproductService,
              private categoriesService: CategoriesService,
              private loginservice: LoginService,
              private router : Router
                                     ) {              
              this.loginservice.getUserInfo().subscribe((res) => {

                if(!res){
                  router.navigate(['/login']); //no one logged in redirect to login
                }

                var {user} = res;
                //console.log(res);
                
                this.model.userId = user.id;
                //console.log(user.userType);
                
                if(user.userType != "seller"){
                    router.navigate(['/']);
                }
                this.categoriesService.getSubcats().subscribe((res) => {
                  this.subcats = res;
                });
            });
  
  }

  ngOnInit() {
    //console.log(window.location.href.split('/'));
    // this.loginservice.getUserInfo().subscribe((res)=>{
    //   // this.userInfo = res;
    //    console.log(res)
    //   //var user = res.user;
    //   // console.log(this.userInfo);
    //   this.userInfo = res.user;
    //   this.userID = res.user.id;
    //   // console.log(this.userInfo);
      
    //   if (this.userInfo.userType == "seller") {
    //       this.model.userId = this.userID;
    //       // this.userID = this.userInfo.id;
    //     console.log(this.userID);
          
    //   }
    //   else{
    //     this.router.navigate(["/"]);
    //   }
    // })
 }

  addProduct() {
    this.AddproductService.addproduct(this.model).subscribe(res => {
      this.res = res.json();
    });
    //console.log(this.model);
  }

  fileUpload(files) {
    var picture = files[0];
    var myReader: FileReader = new FileReader();
    myReader.readAsDataURL(picture);
    myReader.onloadend = (e) => {
      this.model.image = myReader.result;
    }

  }
}
