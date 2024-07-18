import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {OrderComponent} from "../../orders/order.component";

@Component({
  selector: 'app-get-list-orders',
  standalone: true,
  imports: [
    OrderComponent
  ],
  templateUrl: './get-list-orders.component.html',
  styleUrl: './get-list-orders.component.css'
})
export class GetListOrdersComponent {
  constructor(public dialogRef: MatDialogRef<GetListOrdersComponent>) {}
  onClose(): void {
    this.dialogRef.close();
  }
}
