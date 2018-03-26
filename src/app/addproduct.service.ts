import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'


@Injectable()
export class AddproductService {

  constructor(private http: Http) { }

    addproduct(add) {
      console.log(add);
        let headers = new Headers({'Content-Type':'application/json'});
        return this.http.post('http://localhost:9050/api/products/add', JSON.stringify(add), {headers : headers});
    // console.log(res);
      }


}
