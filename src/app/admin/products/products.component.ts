import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/products';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products?:Products[];
constructor(private productservice:ProductserviceService,private router:Router){}
ngOnInit(): void {
 this.getAllProducts(); 
}


getAllProducts(){
  this.productservice.getAllProduct().subscribe(data=>{
    this.products=data;
  })
}
 
add(aid?:number){
  this.productservice.addtocart(aid).subscribe();
  this.router.navigate(['userproducts']);
  alert("  added successfully")
}

Payment(aid?:number){
  this.productservice.addtoPay(aid).subscribe();
  this.router.navigate(['payment']);
  
}

}

