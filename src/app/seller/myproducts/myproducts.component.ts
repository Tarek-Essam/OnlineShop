import { Component, OnInit } from '@angular/core';
import { MyproductsService } from '../../myproducts.service';
import { LoginService } from '../../login.service';


@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {
   sellerId;
   loggedIn : boolean = true;
   products;

    constructor(private myproductsService: MyproductsService, private loginSer: LoginService) { }

    ngOnInit() {
      // this.loginSer.getUserInfo().subscribe((res : any) => {
      //   if(res){
      //     this.loggedIn = true;
      //     console.log(res);
      //     this.sellerId = res._id.json();
      //     console.log(this.sellerId);
      //   }else{
      //     this.loggedIn = false;
      //   }
      //});

      this.myproductsService.getmyproducts("5abe351841c8533315963a5a").subscribe(res => {
        this.products = res;
      });
    }


}