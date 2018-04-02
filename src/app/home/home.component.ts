import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ProductsService } from '../products.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private userInfo : object;
  private ProductsArray = [];
  private Product1:any;
  private Product2:any;
  private Product3:any;
  private Product4:any;
  private Offer1:boolean = false;
  private Offer2:boolean = false;
  private Offer3:boolean = false;
  private Offer4:boolean = false;
  private runCarou: boolean = false;

  constructor(private loginSer: LoginService , private productSer : ProductsService) {

    this.Product1 =   {img:`../../assets/images/adsImage3.png`};
    this.Product2 =   {img:`../../assets/images/adsImage2.png`};
    this.Product3 =   {img:`../../assets/images/adsImage1.png`};
    this.Product4 =   {img:`../../assets/images/adsImage0.png`};
    this.ProductsArray.push(this.Product1,this.Product2,this.Product3,this.Product4);

  }



  ngOnInit() {
    this.productSer.getProductsWithOffers().subscribe((res:any)=>{

      for (let i = 0; i < res.length; i++) {
          this.ProductsArray[i] = res[i];
      }
      this.ProductsArray = res;
      this.Product1 = this.ProductsArray[0];
      this.Product2 = this.ProductsArray[1];
      this.Product3 = this.ProductsArray[2];
      this.Product4 = this.ProductsArray[3];
      this.hasProp();
  })
  console.log(this.ProductsArray);

}

hasProp() {

    if (this.Product1.hasOwnProperty('offer')) {
        this.Offer1 = true;
    }
    else{
      this.Offer1 = false;
    }
    if (this.Product2.hasOwnProperty('offer')) {
        this.Offer2 = true;
    }
    else{
      this.Offer2 = false;
    }
    if (this.Product3.hasOwnProperty('offer')) {
        this.Offer3 = true;
    }
    else{
      this.Offer3 = false;
    }
    if (this.Product4.hasOwnProperty('offer')) {
        this.Offer4 = true;
    }
    else{
      this.Offer4 = false;
    }

}

}
