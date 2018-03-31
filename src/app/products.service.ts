import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Iproduct} from './Iproduct';

@Injectable()

export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>('https://localhost:9050/api/products');
  }
  getProduct(productId):Observable<Iproduct>{
    return this.http.get<Iproduct>('https://localhost:9050/api/products/'+productId);
  }

  getProductsWithOffers(){
    var headers = new HttpHeaders({'content-Type': 'application/json'});
    headers = headers.append('offers', "offers");
    return this.http.get('https://localhost:9050/api/products', {headers: headers});
  }

}
