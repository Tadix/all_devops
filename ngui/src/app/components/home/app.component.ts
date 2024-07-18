import { Component } from '@angular/core';
import {Router, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ProductsComponent} from "../products/products.component";
import {MatDialog} from "@angular/material/dialog";
import {OrderComponent} from "../orders/order.component";
import {GetListOrdersComponent} from "../DialogComponent/get-list-orders/get-list-orders.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, OrderComponent, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public dialog: MatDialog,private router: Router) {}
  title = 'DevOpser';


  productList():void{
    this.router.navigate(['']);

  }
  ordersList(): void {
    this.router.navigate(['/orders']);
  }

  paymentsList(): void {
    this.router.navigate(['/payments']);
  }






}
