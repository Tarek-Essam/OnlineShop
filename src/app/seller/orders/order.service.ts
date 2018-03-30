import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor( private http:Http) {

   }

   getOrders(page){
    return this.http.get(`http://localhost:9050/api/orders/5ab6dcb64c86ec21273ac4e2/${page}`);
    //.map((res)=>res.json());
   }



}
