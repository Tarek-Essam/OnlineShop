import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  cats;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCats().subscribe(res => {
      console.log(res);
      this.cats = res;      
    });
  }

}
