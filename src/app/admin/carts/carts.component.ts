import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Carts } from 'src/app/carts';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit{
  constructor(private cartservice:CartService,
    private router:Router ){}
  ngOnInit(): void {
    this.getAllcarts()
  }
  carts?:Carts[];


  getAllcarts(){
    this.cartservice.getAllcart().subscribe(data=>{ 
      this.carts=data;
    })
  }

  deletecartRecord( aid?:number){
    console.log(aid)
    this.cartservice.deletecart(aid).subscribe();
   window.location.reload();
    
 
  }
}
