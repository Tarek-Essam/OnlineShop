import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Iproduct } from '../../Iproduct';
import { ActivatedRoute,Router,Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product : Iproduct;
  public productId; 

  constructor(private productsService : ProductsService,private ActiveRoute:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.ActiveRoute.paramMap.subscribe((params: Params)=>{
      let id = params.get('id');
      this.productId=id;
      this.productsService.getProduct(this.productId).subscribe(data=>this.product = data);
    });
   
    
  }

}
