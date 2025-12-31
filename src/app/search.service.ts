import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = 'https://radiant-patience-production-40e5.up.railway.app/products';

  constructor(private http: HttpClient) {}

  searchProduct(keyword: string) {
    return this.http.get<any[]>(`${this.baseUrl}/search?keyword=${keyword}`);
  }
}
