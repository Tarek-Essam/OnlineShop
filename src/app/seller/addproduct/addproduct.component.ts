import { Component, OnInit ,ElementRef, ViewChild } from '@angular/core';
import { AddproductService } from '../../addproduct.service';
import { FormsModule, ReactiveFormsModule , FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;

    model = {   productName : '' ,
                productPrice : '' ,
                pcs : '',
                productDesc : '',
                image : ''
                // userId : ''
              } ;

        @ViewChild('fileInput') fileInput: ElementRef;
     // private AddproductService: AddproductService
  constructor(private AddproductService : AddproductService){ }

  ngOnInit() {



  }

    //
    addProduct()
    {
      this.AddproductService.addproduct(this.model).subscribe(res => {
        console.log(res);
      });
      console.log(this.model);
    }

    fileUpload(files){
    console.log(files[0]);
    this.picture = files[0];
    var myReader:FileReader = new FileReader();
      myReader.readAsDataURL(this.picture);
      myReader.onloadend = (e) => {
      this.model.image = myReader.result;
      console.log(this.model.image);
    }



  // }
//on submit
// onSubmit() {
//     const formModel = this.form.value;
//     this.loading = true;
//     // In a real-world app you'd have a http request / service call here like
//     // this.http.post('apiUrl', formModel)
//     setTimeout(() => {
//       console.log(formModel);
//       alert('done!');
//       this.loading = false;
//     }, 1000);
//   }
// //on remove
// clearFile() {
//     this.form.get('avatar').setValue(null);
//     this.fileInput.nativeElement.value = '';
//   }


}
