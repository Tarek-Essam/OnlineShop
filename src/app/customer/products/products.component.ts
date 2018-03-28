import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../products.service';
import { Observable } from 'rxjs/Observable';
import { Iproduct } from '../../Iproduct';
import { ActivatedRoute,Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:any = [];
  public shownProducts:any = [];
  

  constructor(private _productsService: ProductsService,private route:Router) { }

  ngOnInit() {
    this._productsService.getProducts().subscribe(data=>{
      this.products = data;
      this.shownProducts=this.products.slice(0,5) 
      }
    )
  }
 

  pageChanged(event:PageChangedEvent):void{
    var startItem = (event.page-1)*event.itemsPerPage;
    var endItem = event.page *event.itemsPerPage;
    this.shownProducts = this.products.slice(startItem ,endItem);
  }


  

}