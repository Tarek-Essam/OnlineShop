import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hide = false;
  hideLogin = true;
  hideRegister = true;
  hideLayout = false;

  login(e){
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhh");
    if(e == "remove"){
      this.hide = true;
      this.hideLogin = false;
      this.hideLayout = true;
    }else{
      this.hide = false;
      this.hideLogin = true;
      this.hideLayout = false;
    }    
   
  }

  register(e){
    console.log(e);
    if(e == "remove"){
      this.hide = true;
      this.hideRegister = false;
      this.hideLayout = true;
    }else{
      this.hide = false;
      this.hideRegister = true;
      this.hideLayout = false;
    }    
   
  }
}