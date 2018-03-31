import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-products-cat',
  templateUrl: './products-cat.component.html',
  styleUrls: ['./products-cat.component.css']
})
export class ProductsCatComponent implements OnInit {
  public category;
  public products: any = [];
  userId;

  constructor(private productsservice: ProductsService,
    private activeRouter: ActivatedRoute,
    private cartservice: CartService,
    private loginservice: LoginService) {

  }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((params: Params) => {
      let cat = params.get('cat');
      this.category = cat;
      this.productsservice.getProductsByCat(this.category).subscribe(data => {
        this.products = [];
        console.log(data);
        data.forEach((cat: any) => {
          cat.subcat.forEach(subcat => {
            this.products = this.products.concat(subcat.products);
          });
        });
        console.log(this.products);

      })
    })
  }

   addToCart(id) {
    this.loginservice.getUserInfo().subscribe((res) => {
      var { user } = res;
      this.userId = user.id;
      if (user.userType == "customer") {
        this.cartservice.addToCart(id, this.userId).subscribe((err) => {

        });
      }

    });

  }
}
