import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'


@Injectable()
export class EditproductService {


  constructor(private http: Http) { }

    getproduct(id:string) {
        // let headers = new Headers({'Content-Type':'application/json'});
        return this.http.get(`https://localhost:9050/api/products/${id}`);
    // console.log(res);
      }

      addproduct(add,pid) {
        console.log(add);
        console.log(pid);
          let headers = new Headers({'Content-Type':'application/json'});
          return this.http.put(`https://localhost:9050/api/products/edit/${pid}`, JSON.stringify(add), {headers : headers});
      // console.log(res);
        }


}
