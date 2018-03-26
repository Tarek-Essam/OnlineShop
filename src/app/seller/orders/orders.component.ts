import { Component, OnInit } from '@angular/core';
import { OrderService } from "./order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']

})
export class OrdersComponent implements OnInit {
 
  orders;
  result;
  constructor( private orderService:OrderService) { 
    console.log("orders constructor");
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(res => this.orders = res.json().res);
  }

}
