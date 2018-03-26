import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';

import { LoginService } from './login.service';
import { CategoriesService } from './categories.service';

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

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'order/:id', component: OrderdetailsComponent},
  {path: 'products/add', component: AddproductComponent},
  {path: 'profile/edit', component: EditprofileComponent},
  {path: 'product/edit/:id', component: EditproductComponent}, 
  {path: 'search/:keyword', component: SearchComponent},  
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
    MatGridListModule    
  ],
  providers: [LoginService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
