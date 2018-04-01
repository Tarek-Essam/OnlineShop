import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class OrderDetailsService {

  constructor( private http:HttpClient) { }

  getOrderDetails(sellerId ,oId){
    return this.http.get(`https://localhost:9050/api/orders/${sellerId}/1/${oId}`);
    //.map((res)=>res.json());
   }

   updateStatus(oId,status){
   var headers = new HttpHeaders({'content-Type': 'application/json'});
    return this.http.put(`https://localhost:9050/api/orders/edit/${oId}`,{status:status}, {'headers': headers});
   }
   

}
