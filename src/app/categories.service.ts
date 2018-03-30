import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCats(){
    return this.http.get('http://localhost:9090/api/categories');
  }
}
