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
    userId : `${this.userID}`
  };

  @ViewChild('fileInput') fileInput: ElementRef;
  // private AddproductService: AddproductService
  constructor(private AddproductService: AddproductService,
              private categoriesService: CategoriesService,
              private loginSer: LoginService,
              private router : Router
            ) {
    this.categoriesService.getSubcats().subscribe((res) => {
      this.subcats = res;
    });
  }

  ngOnInit() {
    // console.log(window.location.href.split('/'));
    this.loginSer.getUserInfo().subscribe((res)=>{
      // this.userInfo = res;
      // console.log(this.userInfo)
      var {user} = res;
      this.userInfo = user;
      if (this.userInfo.userType == "seller") {
          this.userID = this.userInfo.id;
      }
      else{
        this.router.navigate(["/"]);
      }
    })
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
