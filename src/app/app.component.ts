import { Component } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cats;
  subcats;
  isHidden;
  show =true;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCats().subscribe(res => {
      console.log(res);
      this.cats = res;      
    });
  }

  toggle(){
    this.isHidden = ! this.isHidden ;
  }

}
