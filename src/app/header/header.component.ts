import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cats;
  //subcat;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCats().subscribe(res => {
      console.log(res);
      this.cats = res;
    });
  }

}
