import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-products-sub-cat',
  templateUrl: './products-sub-cat.component.html',
  styleUrls: ['./products-sub-cat.component.css']
})
export class ProductsSubCatComponent implements OnInit {
  public subcat;
  public products: any = [];
  userId;

  constructor(private productsservice: ProductsService,
    private activeRouter: ActivatedRoute,
    private cartservice: CartService,
    private loginservice: LoginService) { }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((params: Params) => {
      let subcat = params.get('subcat');
      this.subcat = subcat;
      this.productsservice.getProductsBySubCat(this.subcat).subscribe((data: any) => {
        this.products = [];
        this.products = data[0].products;

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