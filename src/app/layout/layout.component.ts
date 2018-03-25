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
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCats().subscribe(res => {
      this.cats = res;
    });  
  
  }

  search() {

    this.keyword = $('#search').val();

    if (this.keyword )
      this.categoriesService.searchProducts(this.keyword).subscribe(res => {
        console.log(res);
        this.results = res;
      });   
  }
}
