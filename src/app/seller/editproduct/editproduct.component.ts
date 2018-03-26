import { Component, OnInit } from '@angular/core';
import { EditproductService } from '../../editproduct.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
    p ;
    model = { } ;
  constructor(private EditproductService : EditproductService) { }

  ngOnInit() {
    this.EditproductService.getproduct("5ab8d594f9c17c6b7c3938b8").subscribe(res => {
      console.log(res);
      this.model = res.json();

      console.log(this.model);
    });
  }


  //
  addProduct()
  {
    this.EditproductService.addproduct(this.model,"5ab8d594f9c17c6b7c3938b8").subscribe(res => {
      console.log(res);
    });
    console.log(this.model);
  }

}
