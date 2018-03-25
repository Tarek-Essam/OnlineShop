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

    $(document).ready(function () {
      //Hover Menu in Header
      $('ul.nav li.dropdown').hover(function () {
        $(this).find('.mega-dropdown-menu').stop(true, true).delay(200).fadeIn(200);
      }, function () {
        $(this).find('.mega-dropdown-menu').stop(true, true).delay(200).fadeOut(200);
      });

      //Open Search    
      $('.form-search').click(function (event) {
        $(".instant-results").fadeIn('slow').css('height', 'auto');
        event.stopPropagation();
      });

      $('body').click(function () {
        $(".instant-results").fadeOut('500');
        this.results = {};
      });
    });
  }

  search() {

    this.keyword = $('#search').val();

    if (this.keyword )
      this.categoriesService.searchProducts(this.keyword).subscribe(res => {
        console.log(res);
        this.results = res;
      });
    // else
    // $(".instant-results").fadeOut('500');  
  }
}
