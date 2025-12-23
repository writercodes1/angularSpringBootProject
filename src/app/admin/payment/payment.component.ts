import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pay } from 'src/app/pay';
import { PayserviceService } from 'src/app/payservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
  ngOnInit(): void {
    this.getAllPays();
  }
  constructor(private router:Router,private payservice:PayserviceService){}
  pay?:Pay[];


  getAllPays(){
    this.payservice.getAllPay().subscribe(data=>{ 
      this.pay=data;
    })
  }

  paymeny(aid?:number){
    console.log(aid)
    this.payservice.deletePay(aid).subscribe();
   this.router.navigate(['sucessfull']);
  }
}

 