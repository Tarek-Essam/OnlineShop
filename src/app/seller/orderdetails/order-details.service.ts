import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class OrderDetailsService {

  constructor( private http:Http) { }

  getOrderDetails(oId){
    return this.http.get(`http://localhost:9050/api/orders/5ab6dcb64c86ec21273ac4e2/1/${oId}`);
    //.map((res)=>res.json());
   }

   updateStatus(oId,status){
   var headers = new HttpHeaders({'content-Type': 'application/json'});
    return this.http.put(`http://localhost:9050/api/orders/edit/${oId}`,{status:status}, {headers: headers});
   }
   

}
