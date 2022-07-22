import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent implements OnInit {
  product: Product;
  constructor(product: Product) {
    this.product = product;
   }

  ngOnInit(): void {
    
  }

}
