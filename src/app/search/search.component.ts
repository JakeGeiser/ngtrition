import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ApiHttpService } from '../services/api-http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  searchTerm: string;
  searchResults: Product[] = [];
  constructor(public httpService: ApiHttpService) { }

  ngOnInit(): void {
  
  }

  isDisabled: boolean = false;

  onClick(){
    console.log(this.searchTerm);
    let productList = this.httpService.search(this.searchTerm)  
    this.searchResults = productList;
  }


  

}
