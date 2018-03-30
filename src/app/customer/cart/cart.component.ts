import { Component, OnInit, Inject } from '@angular/core';
import { CartService } from '../../cart.service';

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

  constructor(private cartservice: CartService) { }

  ngOnInit() {
    this.cartservice.getCart("5abbddadd7d89f3f6b4ee168").subscribe((data) => {
      this.products = data;
      this.products.forEach(product => {
        this.total += product.price;    
    });
    this.numbers = new Array(this.products.length);
      this.numbers.fill(1,0);
      console.log(this.numbers);
      
    });
  }

  calculateTotal(e, i){   
    this.total = 0;
    this.numbers[i] = e.target.value;
    for (let i = 0; i < this.products.length; i++) {
      this.total += this.products[i].price * this.numbers[i];      
    }   
  }

  removeFromCart(productid){
    console.log(productid);
    
    this.cartservice.remove("5abbddadd7d89f3f6b4ee168", productid).subscribe((data) => {
      this.products = data;
      console.log(this.products);
      
    });
  }

  checkout(){
    var myOrder = {};
    var errors;
   
    for (let i = 0; i < this.products.length; i++) {    
      if(!myOrder[this.products[i].userId]){
        myOrder[this.products[i].userId] = {};
        myOrder[this.products[i].userId].products = [];
        myOrder[this.products[i].userId].numbers = [];
      }
      myOrder[this.products[i].userId].products.push(this.products[i]._id);
      myOrder[this.products[i].userId].numbers.push(this.numbers[i]);
    }
    console.log(myOrder);

    this.cartservice.checkoutOrder(myOrder).subscribe((data) => {
      errors = data;
      if(errors.length){
        console.log("error");
        
      }else{
        this.products = [];
        this.numbers = [];
        this.total = 0;
        this.emptyCart = true;
        console.log("ok");          
      }
    

    // this.cartservice.checkoutOrder({numbers:this.numbers, products:productsIds , id:"5abbddadd7d89f3f6b4ee168"}).subscribe((data) => {
    //     errors = data;
    //     if(errors.length){
    //       console.log("error");
          
    //     }else{
    //       this.products = [];
    //       this.numbers = [];
    //       this.total = 0;
    //       this.emptyCart = true;
    //       console.log("ok");          
    //     }
      
    // });
  }

  }
