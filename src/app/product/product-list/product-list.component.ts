import { Component, OnInit, Input } from '@angular/core';
import { SearchComponent } from 'src/app/search/search.component';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  searchResults;
  constructor(searchComponent:SearchComponent) {
    this.searchResults = searchComponent.getSearchResults();
   }

  ngOnInit(): void {
  }

  setSearchResults(productList:Product[]){
    this.searchResults = productList;
  }
}
