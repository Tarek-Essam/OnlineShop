import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Iproduct } from '../../Iproduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product : Iproduct;
  public productId; 

  constructor(private _productsService : ProductsService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      let id = parseInt(params.get('id'));
      this.productId=id;
    });
    this._productsService.getProduct(this.productId).subscribe(data=>this.product = data);
    
  }

}
