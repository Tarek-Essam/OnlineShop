import { Component, OnInit } from '@angular/core';
import { EditproductService } from '../../editproduct.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesService } from '../../categories.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  p;
  model = {};
  subcats;
  id;

  constructor(private EditproductService: EditproductService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router) {
    this.categoriesService.getSubcats().subscribe((res) => {
      this.subcats = res;
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.EditproductService.getproduct(this.id).subscribe(res => {
        console.log(res);
        this.model = res.json();
        console.log(this.model);
      });
    });

  }


  //
  addProduct() {
    this.EditproductService.addproduct(this.model, "5ab8d594f9c17c6b7c3938b8").subscribe(res => {
      console.log(res);
    });
    console.log(this.model);
  }

}
