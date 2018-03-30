import { Component, OnInit } from '@angular/core';
import { OrderService } from "./order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']

})
export class OrdersComponent implements OnInit {
 

  error:boolean;
  orders;
  result;
  total;
  limit;
  pages =[];
  numberOfPages;
  active:boolean;

  page;
  constructor( private orderService:OrderService) { 
    console.log("orders constructor");
    this.page=1;
    this.active=false;
    this.error=false;
  }

  ngOnInit() {
    this.orderService.getOrders(this.page).subscribe(res => {
      if (!res) {
        this.error=true;
      }
      this.orders = res.json().docs;
      this.total = res.json().total;
      this.limit = res.json().limit;
      this.numberOfPages = this.total/2;
      for (let i = 1; i <= this.numberOfPages; i++) {
        this.pages.push(i);
      }
    });
  }

  changePage(e){
    console.log(e.target.textContent);
    this.page = parseInt(e.target.textContent);
    this.orderService.getOrders(this.page).subscribe(res => {
      if (!res) {
        this.error=true;
      }
      this.orders = res.json().docs;
    });
  }

}
