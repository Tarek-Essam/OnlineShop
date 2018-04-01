import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingModule } from 'angular-star-rating';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {RatingModule} from "ngx-rating";
import {TimeAgoPipe} from 'time-ago-pipe';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import { LoginService } from './login.service';
import { CategoriesService } from './categories.service';
import { AddproductService } from './addproduct.service';
import { EditproductService } from './editproduct.service';
import { MyproductsService } from './myproducts.service';
import {ProductsService} from './products.service';
import { CartService } from './cart.service';
import { OrderService } from "./seller/orders/order.service";
import { OrderDetailsService } from './seller/orderdetails/order-details.service';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog} from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule ,FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AppComponent } from './app.component';
import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider} from 'angular5-social-login';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { ForgetPassComponent } from './auth/forget-pass/forget-pass.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './customer/cart/cart.component';
import { OrdersComponent } from './seller/orders/orders.component';
import { OrderdetailsComponent } from './seller/orderdetails/orderdetails.component';
import { MyproductsComponent } from './seller/myproducts/myproducts.component';
import { AddproductComponent } from './seller/addproduct/addproduct.component';
import { EditprofileComponent } from './auth/editprofile/editprofile.component';
import { EditproductComponent } from './seller/editproduct/editproduct.component';
import { SearchComponent } from './search/search.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsCatComponent } from './products-cat/products-cat.component';
import { ProductsSubCatComponent } from './products-sub-cat/products-sub-cat.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("431655203947697")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("484031253264-4o9uj7ts2lacfepdbe7sk5n45eue39q6.apps.googleusercontent.com")
        },
      ]);
  return config;
}

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'register', component: RegisterComponent}, 
  {path: 'cart', component: CartComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'order/:id', component: OrderdetailsComponent},
  {path: 'products/add', component: AddproductComponent},
  {path: 'profile/edit', component: EditprofileComponent},
  {path: 'product/edit/:id', component: EditproductComponent}, 
  {path: 'search/:keyword', component: SearchComponent},  
  {path: 'product/edit/:id', component: EditproductComponent},
  {path: 'products/list', component: MyproductsComponent},
  {path: 'search/:keyword', component: HomeComponent},
  {path: 'category/:cat', component: ProductsCatComponent},
  {path: 'subcategory/:subcat', component: ProductsSubCatComponent},
  {path:'product/:id', component: ProductDetailsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    OrdersComponent,
    OrderdetailsComponent,
    MyproductsComponent,
    AddproductComponent,
    EditprofileComponent,
    EditproductComponent,
    SearchComponent,
    LayoutComponent,
    ProductsCatComponent,
    ProductsSubCatComponent,
    ProductDetailsComponent,
    ForgetPassComponent,
    TimeAgoPipe,    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    MatToolbarModule ,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,    
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatExpansionModule,  
    RatingModule,
    NgbModule.forRoot(),
    AsyncLocalStorageModule,
    SocialLoginModule,
    ReactiveFormsModule
           
  ],
  providers: [LoginService,
              CategoriesService, 
              AddproductService,
              EditproductService , 
              MyproductsService,
              CartService,
              ProductsService,
              OrderService,
              OrderDetailsService,
              {provide: AuthServiceConfig,useFactory: getAuthServiceConfigs},
                        
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
