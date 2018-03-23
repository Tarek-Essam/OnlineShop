import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Iproduct } from '../../Iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product : Iproduct;
  public id; 

  constructor(private _productsService : ProductsService) { }

  ngOnInit() {
    this._productsService.getProduct(this.id).subscribe(data=>this.product = data);
  }

}
