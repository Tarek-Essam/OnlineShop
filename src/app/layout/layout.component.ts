import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  cats;
  keyword;
  results;
  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.getCats().subscribe(res => {
      this.cats = res;
    });  
   }

ngOnInit(){}
}