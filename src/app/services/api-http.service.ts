// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { validString } from 'src/utils/string-util';
@Injectable()
export class ApiHttpService {
  constructor(
    // Angular Modules
    private http: HttpClient
  ) { }
  public get(url: string, options?: any) {
    return this.http.get(url, options);
  }

  public search(searchInput: string){
    let url = `https://us.openfoodfacts.org/cgi/search.pl?search_terms=${searchInput}&search_simple=1&action=process&json=true`;
    return this.get(url);
  }
  
}