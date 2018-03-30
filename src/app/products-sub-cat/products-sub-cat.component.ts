import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service'
import { ActivatedRoute,Router,Params } from '@angular/router';

@Component({
  selector: 'app-products-sub-cat',
  templateUrl: './products-sub-cat.component.html',
  styleUrls: ['./products-sub-cat.component.css']
})
export class ProductsSubCatComponent implements OnInit {
  public subcat;
  public products:any = [];
  constructor(private productsservice:ProductsService,private activeRouter:ActivatedRoute) { }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((params: Params)=>{
      let subcat = params.get('subcat');
      this.subcat=subcat;
    this.productsservice.getProductsBySubCat(this.subcat).subscribe(data=>{
      this.products=data;
    })
  }

}
