import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { ApiHttpService } from './api-http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults: Product[]

  constructor(public http : ApiHttpService) { }

  
}
