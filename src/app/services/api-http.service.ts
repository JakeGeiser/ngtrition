// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { validString } from 'src/utils/string-util';
import { firstValueFrom } from 'rxjs';
import { Product } from '../product/product';

@Injectable()
export class ApiHttpService {
  searchResults: Product[] = [];
  httpHeader = new Headers({
    "User-Agent": "ngTrition - Version 0.2.0",
    "contact": "https://github.com/JakeGeiser"
  });

  constructor(
    // Angular Modules
    private http: HttpClient
  ) { }
  public get(url: string, options?: any) {
    return this.http.get(url, options);
  }

  public async search(searchInput: string){
    let url = `https://us.openfoodfacts.org/cgi/search.pl?search_terms=${searchInput}&search_simple=1&action=process&json=true`;
    await this.get(url, {"headers": this.httpHeader})
      .subscribe(data => 
        data["products"].forEach(productObj =>
          this.searchResults.push(this.mapObjToProduct(productObj))
    ));
    
    console.log(this.searchResults);
  return this.searchResults;
}

mapObjToProduct(pO: Object){
  let id = pO["_id"] ? pO["_id"]: "Blank";
  let name = pO["product_name_en"] ? pO["product_name_en"]: "Blank";
  let imgFrontDisplay = (((pO["selected_images"] || {})["front"] || {})["display"] || {})["en"] ? pO["selected_images"]["front"]["display"]["en"] : "#";
  let imgFrontThumb = (((pO["selected_images"] || {})["front"] || {})["thumb"] || {})["en"] ? pO["selected_images"]["front"]["thumb"]["en"] : "#";
  let imgNutrDisplay = (((pO["selected_images"] || {})["nutrition"] || {})["display"] || {})["en"] ? pO["selected_images"]["nutrition"]["display"]["en"] : "#";
  let productT = {
    "id" : id,
    "name" : name,
    "keywords" : pO["_keywords"],
    "ingredients" : pO["ingredients_text_en"],
    "nutriments" : pO["nutriments"],
    "nutriscore" : pO["nutriscore_data"],
    "imageFrontDisplay" : imgFrontDisplay,
    "imageFrontThumb" : imgFrontThumb,
    "imageNutritionDisplay" : imgNutrDisplay,
  }
  return productT;
}
  
}