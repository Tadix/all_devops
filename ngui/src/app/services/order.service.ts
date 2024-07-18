import {inject, Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Order} from "../models/order";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _httpClient = inject(HttpClient);

  private apiUrl = 'nodeapi/v1/commande';

  getOrders(): Observable<Order[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
  return this._httpClient.get<Order[]>(this.apiUrl, { headers });

  }
}
