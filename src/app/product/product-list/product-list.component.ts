import { Component, OnInit, Input } from '@angular/core';
import { SearchComponent } from 'src/app/search/search.component';
import { Product } from '../product.model';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  productList;
  constructor(public httpService: ApiHttpService) {
    this.productList = httpService.productList;
   }

  ngOnInit(): void {
    this.productList = this.httpService.productList;
  }

}
