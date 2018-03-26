import { Component, OnInit } from '@angular/core';
import { EditproductService } from '../../editproduct.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesService } from '../../categories.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
    p ;
    model = { } ;
    subcats;
    
  constructor(private EditproductService : EditproductService, private categoriesService: CategoriesService) { 
    this.categoriesService.getSubcats().subscribe((res) => {
      this.subcats = res;
    });
  }

  ngOnInit() {
    this.EditproductService.getproduct("5ab94eeaf35c664599f72a25").subscribe(res => {
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
