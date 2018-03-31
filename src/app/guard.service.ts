import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {

  constructor() { }

  canActivate(){
    var location = window.location.href.split("/");
    if(location[location.length-1] == "login"){
      return true
    }else{
      return false;
    }
    
  }
}
