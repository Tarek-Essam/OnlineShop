import { Component, OnInit } from '@angular/core';
import { MyproductsService } from '../../myproducts.service';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {
  sellerId;
  loggedIn: boolean = true;
  products;

  constructor(private myproductsService: MyproductsService,
    private loginservice: LoginService,
    private router: Router) {  }

  ngOnInit() {

    this.loginservice.getUserInfo().subscribe((res) => {
     
      
      if(!res){
        this.router.navigate(['/login']); //no one logged in redirect to login
      }

      var { user } = res;
      this.sellerId = user.id;

      if (user.userType != "seller") {
        this.router.navigate(['/']);
      }

      this.myproductsService.getmyproducts(this.sellerId).subscribe(res => {
        console.log(res);
        this.products = res;
      });

    });
  }
}