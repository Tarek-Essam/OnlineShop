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
  private firstProduct:object;
  private secProduct:object;
  private thirdProduct:object;
  private fourthProduct:object;
  private runCarou: boolean = false;

  constructor(private loginSer: LoginService , private productSer : ProductsService) { }

  ngOnInit() {
    this.productSer.getProductsWithOffers().subscribe((res)=>{
    this.firstProduct = res[0];
    this.secProduct = res[1];
    this.thirdProduct = res[2];
    this.fourthProduct = res[3];
    this.runCarou = true;
  })
}


}
