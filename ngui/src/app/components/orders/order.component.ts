import {Component, OnInit} from '@angular/core';
import {Order} from "../../models/order";
import {OrderService} from "../../services/order.service";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe,
    NgForOf,
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  orders: Order[]=[];

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService.getOrders()
    .subscribe(
      data => this.orders = data,
      error => console.error('There was an error!', error)
    );

  }
}
