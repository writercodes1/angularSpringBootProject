import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ManageproComponent } from './managepro/managepro.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CartsComponent } from './carts/carts.component';
import { PaymentComponent } from './payment/payment.component';
import { SucessfullComponent } from './sucessfull/sucessfull.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserproductsComponent } from './userproducts/userproducts.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserregComponent } from './userreg/userreg.component';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [
    
    AddproductComponent,
    LoginComponent,
    ManageproComponent,
    AdminloginComponent,
    CartsComponent,
    PaymentComponent,
    SucessfullComponent,
    ProductsComponent,
    NavbarComponent,
    UserproductsComponent,
    UpdateComponent,
    UserregComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
