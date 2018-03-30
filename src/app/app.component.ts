import { Component, ViewChild } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword;
  shouldRun = true;
  
  // @ViewChild(search)

  constructor(private categoriesService: CategoriesService) { }

  getKeyword($event){
    this.keyword = $event;
    console.log(this.keyword);
    
  }
 
}
