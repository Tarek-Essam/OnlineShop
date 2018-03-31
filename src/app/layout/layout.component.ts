import { Component, OnInit , ViewChild } from '@angular/core';
import { CategoriesService } from '../categories.service';
import * as $ from 'jquery';
import { LoginComponent } from '../auth/login/login.component';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @ViewChild(LoginComponent)
    private login: LoginComponent;

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
