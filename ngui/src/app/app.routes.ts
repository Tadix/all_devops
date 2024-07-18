import { Routes } from '@angular/router';
import {OrderComponent} from "./components/orders/order.component";
import {ProductsComponent} from "./components/products/products.component";
import {PayementComponent} from "./components/payement/payement.component";

export const routes: Routes = [
  {
    path: '',component:ProductsComponent,
  },
  {
    path: 'orders',component:OrderComponent
  },
  {
    path: 'payments',component:PayementComponent
  }
];
