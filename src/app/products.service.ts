import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Iproduct} from './Iproduct';
 
@Injectable()

export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsByCat(category):Observable<Iproduct[]>{
    console.log(category);
    
    return this.http.get<Iproduct[]>(`https://localhost:9050/api/categories/${category}/products`);
  }

  getProductsBySubCat(subcat):Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>('https://localhost:9050/api/subcat/'+subcat);
  }

  getProduct(productId):Observable<Iproduct>{
    return this.http.get<Iproduct>('https://localhost:9050/api/products/'+productId);
  }

  getRate(productId){
    return this.http.get('https://localhost:9050/api/rating/'+productId);
  }

  getMyRate(productId, userId){
    return this.http.get(`https://localhost:9050/api/rating/${userId}/${productId}`);

  }

  rate(userId, productId ,rating){
    let headers = new HttpHeaders({'Content-Type':  'application/json'});
    return this.http.put(`https://localhost:9050/api/rating/${userId}/${productId}`, {'rate' : rating}, {'headers': headers});
  }

  getProductsWithOffers(){
    var headers = new HttpHeaders({'content-Type': 'application/json'});
    headers = headers.append('offers', "offers");
    return this.http.get('https://localhost:9050/api/products', {headers: headers});
  }
  
}
