import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MyproductsService {

  constructor(private http: HttpClient) { }

  getmyproducts(userid : string){

    return this.http.get(`https://localhost:9050/api/products/seller/${userid}`);

  }
}
