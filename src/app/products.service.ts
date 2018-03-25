import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Iproduct} from './Iproduct';
 
@Injectable()

export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>('http://localhost:10000/products');
  }
  getProduct(productId):Observable<Iproduct>{
    return this.http.get<Iproduct>('http://localhost:10000/products/'+productId);
  }

}
