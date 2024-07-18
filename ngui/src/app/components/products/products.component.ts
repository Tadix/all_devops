import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NgForOf} from "@angular/common";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    SlickCarouselModule,
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})

export class ProductsComponent implements OnInit {
  products: Product[] = [];

constructor(private ProductService: ProductService){}

  ngOnInit(): void {
  this.ProductService.getProducts().subscribe(
    data => {
      this.products = data;
      this.products.forEach(product => {
        product.productImage = 'https://cdn4.iconfinder.com/data/icons/social-media-2069/130/_Google-512.png';
        product.productDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim.';
      });
    },
    error => console.error('There was an error!', error),
  );
  }

}
