import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseURL1 ="http://localhost:8081/addUser";
baseURL2 ="http://localhost:8081/userLogin";
  constructor(private httpclient:HttpClient) { }

  loginuser(user:User):Observable<Object>{
console.log(user);
return this.httpclient.post(`${this.baseURL2}`,user);
  }


  addUsers(user?:User):Observable<Object>{
    return this.httpclient.post<Object>(`${this.baseURL1}`,user)
  }
}
 
