import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from "./order-details.service";
import {ActivatedRoute, Params} from "@angular/router";

import { log } from 'util';


@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  orderdetails;
  error:boolean;
  isSeller:Boolean;
  client:boolean;
  selected:String;
  uId;
  

  constructor(private orderDetailsService:OrderDetailsService,private activatedRoute:ActivatedRoute ) {

    this.isSeller = true;
    this.client = false;
    this.error =false;
    this.selected = "recivied";
   }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params)=>{
      let id = params['id'];
      console.log(id);
      this.orderDetailsService.getOrderDetails(id).subscribe((res:any) => {
        //if(res.err)
        console.log(res);
        
        if (!res || res.err) {
          this.error=true;
        }
        this.orderdetails = res.res[0];
        console.log(this.orderdetails);
      });

    });
    
  }

  changeStatus(event){
    this.orderDetailsService.updateStatus(this.uId,event.target.value).subscribe((res:any) => {
      if (!res.json().error) {
        this.selected=event.target.value;
      }
    })
  }
}