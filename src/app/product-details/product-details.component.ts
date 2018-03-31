import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  avgRate = { 'rate': 0 };
  myrate = { 'rate': 0 };
  userId;
  userType;
  id; //product id

  constructor(private productservice: ProductsService,
    private activeRouter: ActivatedRoute,
    private cartservice: CartService,
    private loginservice: LoginService) { }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((params: Params) => {

      this.id = params.get('id');

      this.productservice.getProduct(this.id).subscribe((product: any) => {
        console.log(product);
        this.product = product;
      });

      this.productservice.getRate(this.id).subscribe((rate: any) => {
        console.log(rate);
        this.avgRate = rate;
      });

      this.loginservice.getUserInfo().subscribe((res) => {
        var { user } = res;
        this.userType = user.userType;
        this.userId = user.id;
        if (this.userType == "customer") {
          this.productservice.getMyRate(this.id, this.userId).subscribe((myrate: any) => {
            console.log(myrate);
            if (myrate.rate) {
              this.myrate = myrate;
            }

          });
        }
      });



    });
  }

  addToCart(id) {
    this.loginservice.getUserInfo().subscribe((res) => {
      var { user } = res;
      this.userId = user.id;
      if (this.userType == "customer") {
        this.cartservice.addToCart(id, this.userId).subscribe((err) => {

        });
      }

    });

  }

  addRate() {
    console.log(this.myrate);
    if(this.userType == "customer"){
      this.productservice.rate(this.userId, this.id, this.myrate.rate).subscribe((data) => {
        console.log(data);
  
      });
    }
   

  }

}
