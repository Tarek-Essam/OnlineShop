import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCats(){
    return this.http.get('https://localhost:9050/api/categories');
  }

  searchProducts(keyword:String){
    return this.http.get(`https://localhost:9050/api/products/search/${keyword}`);
  }

  getSubcats(){
    return this.http.get('https://localhost:9050/api/subcat');

  } 
}
