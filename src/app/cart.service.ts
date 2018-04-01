import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class CartService {

  constructor(private http: HttpClient) { }

  addToCart(id, userid){
    let headers = new HttpHeaders({'Content-Type':  'application/json'});
    return this.http.post('https://localhost:9050/api/cart/add', JSON.stringify({productId:id, userId:userid}),{headers: headers});
  }

  getCart(id){
    return this.http.get('https://localhost:9050/api/cart/'+id);
  }

  remove(userid, productid){
    return this.http.delete(`https://localhost:9050/api/cart/${userid}/${productid}`);
  }

  checkoutOrder(order){
    console.log(order);    
    let headers = new HttpHeaders({'Content-Type':  'application/json'});
    return this.http.post('https://localhost:9050/api/cart/checkout', JSON.stringify(order), {headers: headers});
  }

  // addOrder(order){
  //   let headers = new HttpHeaders({'Content-Type':  'application/json'});
  //   return this.http.post('https://localhost:9050/api/orders/add', JSON.stringify(order), {headers: headers});
  // }

  emptyCart(userId){
    let headers = new HttpHeaders({'Content-Type':  'application/json'});
    return this.http.delete('https://localhost:9050/api/cart/'+userId);

  }
  
}