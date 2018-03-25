import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  cats;
  isHidden = true;
  i = 0;
  stateArray = ["", "active"];
  state = "";

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCats().subscribe(res => {
      console.log(res);
      this.cats = res;      
    });
  }

  toggle(){
    this.state = this.stateArray[(++this.i) % 2]; 
  }

}
