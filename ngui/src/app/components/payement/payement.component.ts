import {Component, OnInit} from '@angular/core';
import {Payement} from "../../models/payement";
import {PayementService} from "../../services/payement.service";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-payement',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    NgForOf
  ],
  templateUrl: './payement.component.html',
  styleUrl: './payement.component.css'
})
export class PayementComponent implements OnInit {

  payments: Payement[] = [];

  constructor(private paymentService: PayementService) {
  };


  ngOnInit(): void {
    this.paymentService.getPayments().subscribe(
      data =>
        this.payments = data
      ,
      error => console.error('There was an error!', error),
    );
  }

}
