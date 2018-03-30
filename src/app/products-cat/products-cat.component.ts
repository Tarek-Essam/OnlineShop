import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service'
import { ActivatedRoute,Router,Params } from '@angular/router';

@Component({
  selector: 'app-products-cat',
  templateUrl: './products-cat.component.html',
  styleUrls: ['./products-cat.component.css']
})
export class ProductsCatComponent implements OnInit {
public category;
public products:any = [];
  constructor(private productsservice:ProductsService,private activeRouter:ActivatedRoute) { 

  }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((params: Params)=>{
      let cat = params.get('cat');
      this.category=cat;
    this.productsservice.getProductsByCat(this.category).subscribe(data=>{
      this.products=data;
    })
  }
 }

}
