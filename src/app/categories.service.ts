import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCats(){
<<<<<<< HEAD
    return this.http.get('http://localhost:9090/api/categories');
=======
    return this.http.get('https://localhost:9050/api/categories');
>>>>>>> 53eba8919e720bccbb4f7c20ee48b18bad2de9a7
  }

  searchProducts(keyword:String){
    return this.http.get(`https://localhost:9050/api/products/search/${keyword}`);
  }

  getSubcats(){
    return this.http.get('https://localhost:9050/api/subcat');

  }


}
