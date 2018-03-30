import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor( private http:Http) {

   }

<<<<<<< HEAD
   getOrders(page){
    return this.http.get(`http://localhost:9050/api/orders/5ab6dcb64c86ec21273ac4e2/${page}`);
=======
   getOrders(){
    return this.http.get(`http://localhost:9050/api/orders/filter/5ab6dcb64c86ec21273ac4e2`);
>>>>>>> 53eba8919e720bccbb4f7c20ee48b18bad2de9a7
    //.map((res)=>res.json());
   }



}
