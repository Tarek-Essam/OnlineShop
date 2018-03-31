import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor( private http:Http) {

   }

   getOrders(){
    return this.http.get(`http://localhost:9050/api/orders/filter/5ab6dcb64c86ec21273ac4e2`);
    //.map((res)=>res.json());
   }



}
