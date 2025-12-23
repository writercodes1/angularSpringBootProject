import { Component } from '@angular/core';
import { Products } from 'src/app/products';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products?:Products[];
constructor(private productservice:ProductserviceService){}
ngOnInit(): void {
 this.getAllProducts(); 
}


getAllProducts(){
  this.productservice.getAllProduct().subscribe(data=>{
    this.products=data;
  })
}
}
