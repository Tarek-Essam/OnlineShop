import { Component, OnInit, Inject } from '@angular/core';
import { CartService } from '../../cart.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    products;
    emptyCart = false;
    numbers;
    total = 0;
    state;
    userId;

    constructor(private cartservice: CartService, 
                private loginservice: LoginService,
                private router: Router) {
        loginservice.getUserInfo().subscribe((res) => {
            var {user} = res;
            this.userId = user.id;
            console.log(user.userType);
            
            if(user.userType != "customer"){
                router.navigate(['/']);
            }

            this.cartservice.getCart(this.userId).subscribe((data) => {
                this.products = data;
                if(!this.products){
                    this.state = false;
                }
                this.products.forEach(product => {
                    this.total += product.price;
                });
                this.numbers = new Array(this.products.length);
                this.numbers.fill(1, 0);
                console.log(this.numbers);
    
            });
        });

     }

    ngOnInit() {
       
    }

    checkState(){

    }

    calculateTotal(e, i) {
        this.total = 0;
        this.numbers[i] = e.target.value;
        for (let i = 0; i < this.products.length; i++) {
            this.total += this.products[i].price * this.numbers[i];
        }
    }

    removeFromCart(productid, num, price) {
        console.log(productid);

        this.cartservice.remove(this.userId, productid).subscribe((data) => {
            this.products = data;
            this.total -= num * price;
        });
    }

    checkout() {
        var myOrder = {};
        var errors;

        for (let i = 0; i < this.products.length; i++) {

            if (!myOrder[this.products[i].userId]) {
                myOrder[this.products[i].userId] = {};
                myOrder[this.products[i].userId].products = [];
                myOrder[this.products[i].userId].numbers = [];
            }

            myOrder[this.products[i].userId].products.push(this.products[i]._id);
            myOrder[this.products[i].userId].numbers.push(this.numbers[i]);
        }

        this.cartservice.checkoutOrder(myOrder).subscribe((result:any) => {           
            console.log(result);

            if (result.res == "outOfStock") {
                console.log("error");
                console.log(result.error); // out of stock products and available stock 
                // modal showing the availble peices

            } else {
                this.cartservice.emptyCart(this.userId).subscribe((data) => {
                    this.products = [];
                    this.numbers = [];
                    this.total = 0;
                    this.emptyCart = true;
                });
                            
            }
        })
    }
}