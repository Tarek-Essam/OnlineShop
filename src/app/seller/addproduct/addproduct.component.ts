import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AddproductService } from '../../addproduct.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../categories.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  subcats;
  res;

  model = {
    productName: '',
    productPrice: '',
    pcs: '',
    productDesc: '',
    image: '',
    subcat:'',
    userId : '5abbf3cb87843c4931fda0b2'
  };

  @ViewChild('fileInput') fileInput: ElementRef;
  // private AddproductService: AddproductService
  constructor(private AddproductService: AddproductService, 
              private categoriesService: CategoriesService) {
    this.categoriesService.getSubcats().subscribe((res) => {
      this.subcats = res;
    });
  }

  ngOnInit() { }

  addProduct() {
    this.AddproductService.addproduct(this.model).subscribe(res => {
      console.log(res);
      this.res = res.json();
    });
    //console.log(this.model);
  }

  fileUpload(files) {
    console.log(files[0]);
    var picture = files[0];
    var myReader: FileReader = new FileReader();
    myReader.readAsDataURL(picture);
    myReader.onloadend = (e) => {
      this.model.image = myReader.result;
      console.log(this.model.image);
    }
  
  }
}
