import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL1 ="http://localhost:8081/admin";
  constructor(private httpclient:HttpClient) { }
 
  loginadmin(admin:Admin):Observable<Object>{
      console.log(admin);
      return this.httpclient.post(`${this.baseURL1}`,admin);
  }
  
}