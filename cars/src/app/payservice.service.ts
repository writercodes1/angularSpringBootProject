import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pay } from './pay';

@Injectable({
  providedIn: 'root'
})
export class PayserviceService {
  baseURL1="https://radiant-patience-production-40e5.up.railway.app/pay";
  baseURL2="https://radiant-patience-production-40e5.up.railway.app/deletepay";
  constructor(private httpClient:HttpClient) { }


  getAllPay():Observable<Pay[]>{
   
    return this.httpClient.get<Pay[]>(`${this.baseURL1}`);
  
  }
  deletePay(aid?:number):Observable<Object>{
   
    return this.httpClient.get<Object>(`${this.baseURL2}/${aid}`);
  }
}
 

 