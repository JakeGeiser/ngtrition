import { Component, OnInit, Input } from '@angular/core';
import { SearchComponent } from 'src/app/search/search.component';
import { Product } from '../product.model';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
  providers:[
    {
      provide: 'productList',
      useValue: 'product-List'
    }
  ]
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  constructor(public httpService: ApiHttpService) {
    
   }

  ngOnInit(): void {
    
  }
  
  public onApiCallCompletion(products:Product[]){
    this.productList = products;
  }

}
