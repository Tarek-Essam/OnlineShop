import { Component, OnInit } from '@angular/core';
import { MyproductsService } from '../../myproducts.service';


@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {
  pro = {
      name :"rrr",
      price :5 ,
      desc:"fddfdf",
      pcs : "344",

  };

    constructor(private MyproductsService: MyproductsService) { }

    ngOnInit() {
      // this.MyproductsService.getmyproducts("4343").subscribe(res => {
      //   console.log(res);
      //   this.pro = res;
      //   console.log(this.pro);
      // });
    }


}
