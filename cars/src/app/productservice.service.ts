import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
baseURL1="http://radiant-patience-production-40e5.up.railway.app/products";
baseURL2="http://radiant-patience-production-40e5.up.railway.app/addproduct"; 
baseURL3="http://radiant-patience-production-40e5.up.railway.app/product";
baseURL4="http://radiant-patience-production-40e5.up.railway.app/addtocart";
baseURL5="http://radiant-patience-production-40e5.up.railway.app/addtopay";
id?:number;
  constructor(private httpClient:HttpClient) { }

  getAllProduct():Observable<Products[]>{
     
    return this.httpClient.get<Products[]>(`${this.baseURL1}`);

  }


  addProducts(products?:Products):Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseURL2}`,products)
  }

   
 
getId(getId?:number){
this.id=getId;
}
getProductsById(id?:number):Observable<Object>{
  return this.httpClient.get<Object>(`${this.baseURL3}/${id}`);
}

  // updateProducts(products?:Products):Observable<Object>{
  //   return this.httpClient.put<Object>(`${this.baseURL1}/${this.id}`,products)
  // }

  deleteProducts(aid?:number):Observable<Object>{
     
    return this.httpClient.get<Object>(`${this.baseURL3}/${aid}`);
  }

addtocart(aid?:number):Observable<Object>{
     
  return this.httpClient.get<Object>(`${this.baseURL4}/${aid}`);
}

addtoPay(aid?:number):Observable<Object>{
     
  return this.httpClient.get<Object>(`${this.baseURL5}/${aid}`);
}
}
