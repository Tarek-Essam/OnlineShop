import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LoginService } from './login.service';

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
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

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
    HeaderComponent,
    SidebarComponent,    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
