import { Injectable, OnInit } from '@angular/core';
import { Carts } from './carts';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService  {
  baseURL1="http://localhost:8081/carts";
  baseURL2="http://localhost:8081/deletecarts";
  constructor(private httpClient:HttpClient) { }
  
  getAllcart():Observable<Carts[]>{
     
    return this.httpClient.get<Carts[]>(`${this.baseURL1}`);

  }

  deletecart(aid?:number):Observable<Object>{
     
    return this.httpClient.get<Object>(`${this.baseURL2}/${aid}`);
  }
}
 