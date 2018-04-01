import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor( private http:Http) {

   }

   getOrders(sellerId ,page){
    return this.http.get(`https://localhost:9050/api/orders/${sellerId}/${page}`);
    //.map((res)=>res.json());
   }


}
