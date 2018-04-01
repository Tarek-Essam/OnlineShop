import { Component, OnInit } from '@angular/core';
import { EditproductService } from '../../editproduct.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesService } from '../../categories.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../../login.service';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  p;
  model = {};
  subcats;
  id;
  res;

  constructor(private EditproductService: EditproductService,
              private categoriesService: CategoriesService,
              private route: ActivatedRoute,
              private router: Router,
              private loginservice: LoginService) {

      loginservice.getUserInfo().subscribe((res) => {
        if(!res){
          router.navigate(['/login']); //no one logged in redirect to login
        }

        var {user} = res;
        console.log(res);
        
        //this.model.userId = user.id;
        //console.log(user.userType);
        
        if(user.userType != "seller"){
            router.navigate(['/']);
        }
        this.categoriesService.getSubcats().subscribe((res) => {
          this.subcats = res;
        });
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.EditproductService.getproduct(this.id).subscribe(res => {
        console.log(res);
        this.model = res.json();
        console.log(this.model);
      });
    });

  }


  //
  addProduct() {
    this.EditproductService.addproduct(this.model, "5ab8d594f9c17c6b7c3938b8").subscribe(res => {
      console.log(res);
      this.res=res.json();
    });
    console.log(this.model);
  }

}
