import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class LoginService {
email :string;
password:string;
userData: object;
userToken: any;
private userInfoToUse: object;
  constructor(private http: HttpClient , protected storage: AsyncLocalStorage ) {}

  getUserInfo(){
    return this.userInfoToUse;
  }

  setUserInfo(info : object){
    this.userInfoToUse = info;
  }

  onStartLogIn(token){
    var headers = new HttpHeaders({'content-Type': 'application/json'});
    headers = headers.append('token', token);
    return this.http.get('https://localhost:9050/api/authenticate', {headers: headers});
  }

   getToken(email , password){
     this.email = email;
     this.password = password;

     const userData = {
      email: this.email,
      password: this.password,
      provider: "local"
    };
    let userDataString = JSON.stringify(userData);
    return this.http.post('https://localhost:9050/api/authenticate', userDataString, {headers:{'Content-Type': 'application/json'}});
   }

   getSocialToken(userDataObject){
     this.userData = userDataObject;
     let userDataString = JSON.stringify(this.userData);
     return this.http.post('https://localhost:9050/api/authenticate', userDataString, {headers:{'Content-Type': 'application/json'}});
   }

   sendToRegister(userMail){
     let mailObj = JSON.stringify({'mail':userMail});
     return this.http.post('https://localhost:9050/api/user/validations', mailObj ,{headers:{'Content-Type': 'application/json'}});
   }


    registerUser(userRegisterData){
      let userObj = JSON.stringify(userRegisterData);
      return this.http.post('https://localhost:9050/api/user', userObj ,{headers:{'Content-Type': 'application/json'}});
    }

    forgetPasswordMail(userMail){
      let mailObj = JSON.stringify(userMail);
      return this.http.post('https://localhost:9050/api/user/forgetpass', mailObj ,{headers:{'Content-Type': 'application/json'}});

    }

    resetPassword(newUserData){
      let userData = JSON.stringify(newUserData);
      return this.http.put('https://localhost:9050/api/user/forgetpass', userData ,{headers:{'Content-Type': 'application/json'}});
    }

}
