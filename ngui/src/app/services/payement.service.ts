import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Payement} from "../models/payement";

@Injectable({
  providedIn: 'root'
})
export class PayementService {

  private _httpClient = inject(HttpClient);

  private apiUrl = '/pythonapi/v1/payments';
  getPayments(): Observable<Payement[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this._httpClient.get<Payement[]>(this.apiUrl, { headers });

  }
}
