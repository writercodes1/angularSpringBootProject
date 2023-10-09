import { NgModule } from '@angular/core';
 
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ManageproComponent } from './managepro/managepro.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SucessfullComponent } from './sucessfull/sucessfull.component';
import { PaymentComponent } from './payment/payment.component';
import { CartsComponent } from './carts/carts.component';
import { ProductsComponent } from './products/products.component';
import { UserproductsComponent } from './userproducts/userproducts.component';
import { UpdateComponent } from './update/update.component';
import { UserregComponent } from './userreg/userreg.component';
 
const routes:Routes=[
  {
    path:"",
    component:ProductsComponent
  },{
    path:"userproducts",
    component:UserproductsComponent
  },{
    path:"login",
    component:LoginComponent
  },{
    path:"userreg",
    component:UserregComponent
  },
  {
    path:"carts",
    component:CartsComponent
  },
  {
    path:"update",
    component:UpdateComponent
  },{
    path:"managepro",
    component:ManageproComponent
  },
  {
    path:"adminlogin",
    component:AdminloginComponent
  },
 
  {
    path:"addproduct",
    component: AddproductComponent
  }, {
    path:"payment",
    component: PaymentComponent
  }, {
    path:"sucessfull",
    component: SucessfullComponent 
  }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
