import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _httpClient = inject(HttpClient);

  private apiUrl = '/javaapi/v1/products';
  getProducts(): Observable<Product[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this._httpClient.get<Product[]>(this.apiUrl, { headers });

  }
}
