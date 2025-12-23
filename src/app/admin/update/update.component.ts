import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/products';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
  products: Products =new Products();
  constructor(private productservice:ProductserviceService,
    private router:Router){}
  ngOnInit(): void {
  
  }
 
  addProduct(){
    console.log(this.products);
    this.productservice.addProducts(this.products).subscribe();
    this.router.navigate(['managepro']);
  }
 
}
