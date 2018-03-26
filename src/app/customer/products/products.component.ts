import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../products.service';
import { Observable } from 'rxjs/Observable';
import { Iproduct } from '../../Iproduct';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products = [];

  constructor(private _productsService: ProductsService,private route:Router) { }

  ngOnInit() {
    this._productsService.getProducts().subscribe(data=>this.products=data);
  }

  

}