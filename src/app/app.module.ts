import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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

import {HttpModule} from '@angular/http';
import { LoginService } from './login.service';
import { CategoriesService } from './categories.service';
import { AddproductService } from './addproduct.service';
import { EditproductService } from './editproduct.service';
import { MyproductsService } from './myproducts.service';
import {ProductsService} from './products.service';
import { CartService } from './cart.service';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog} from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule ,FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './customer/home/home.component';
import { ProductsComponent } from './customer/products/products.component';
import { ProductComponent } from './customer/product/product.component';
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

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products/:cat', component: ProductsCatComponent},
  {path: 'products/cat/:subcat', component: ProductsSubCatComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'order/:id', component: OrderdetailsComponent},
  {path: 'products/add', component: AddproductComponent},
  {path: 'profile/edit', component: EditprofileComponent},
  {path: 'product/edit/:id', component: EditproductComponent}, 
  {path: 'search/:keyword', component: SearchComponent},  
  {path: 'product/edit/:id', component: EditproductComponent},
  {path: 'product/list/:id', component: MyproductsComponent},
  {path: 'search/:keyword', component: HomeComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
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
    MatExpansionModule        
  ],
  providers: [LoginService, 
              CategoriesService, 
              AddproductService,
              EditproductService , 
              MyproductsService,
              CartService,
              ProductsService              
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
