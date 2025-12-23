import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/products';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-managepro',
  templateUrl: './managepro.component.html',
  styleUrls: ['./managepro.component.scss']
})
export class ManageproComponent {
  products?:Products[];
  constructor(private productservice:ProductserviceService,
    private router:Router){}
  ngOnInit(): void {
   this.getAllProducts(); 
  }
  
  
  getAllProducts(){
    this.productservice.getAllProduct().subscribe(data=>{ 
      this.products=data;
       
    })
  }

  updateproductRecord(id?:number){
    this.productservice.deleteProducts(id).subscribe();
    this.router.navigate(['update']);
  }


    deleteproductRecord( aid?:number){
    
      this.productservice.deleteProducts(aid).subscribe();
     
     alert(" deleted successfully")
     this.router.navigate(['managepro']);
     window.location.reload();
     
    }
  }