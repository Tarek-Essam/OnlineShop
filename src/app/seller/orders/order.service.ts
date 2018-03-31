import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor( private http:Http) {

   }

   getOrders(page){
    return this.http.get(`https://localhost:9050/api/orders/5abe351941c8533315963a5b/${page}`);
    //.map((res)=>res.json());
   }


}
