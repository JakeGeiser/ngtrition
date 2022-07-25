// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { validString } from 'src/utils/string-util';
import { Product } from '../product/product.model';
@Injectable()
export class ApiHttpService {
  productList: Product[] = []

  constructor(
    // Angular Modules
    private http: HttpClient
  ) { }
  public get(url: string, options?: any) {
    return this.http.get(url, options);
  }

  public search(searchInput: string){
    let url = `https://us.openfoodfacts.org/cgi/search.pl?search_terms=${searchInput}&search_simple=1&action=process&json=true`;
    this.get(url)
    .subscribe(data => {
        data["products"].forEach(productObj => {
          console.log(productObj["_id"]);
          // console.log(productObj["product_name_en"]);
          // console.log(productObj["_keywords"]);
          // console.log(productObj["ingredients_text_en"]);
          // console.log(productObj["nutriments"]);
          // console.log(productObj["nutriscore_data"]);
          // console.log(productObj["selected_images"]["front"]["display"]["en"]);
          // console.log(productObj["selected_images"]["front"]["thumb"]["en"]);
          // console.log(productObj["selected_images"]["nutrition"]["display"]["en"]);
          this.productList.push(this.mapObjToProduct(productObj));})
  })
  return this.productList;
}
  mapObjToProduct(pO: Object){
    let id = pO["_id"] ? pO["_id"]: "Blank";
    let name = pO["product_name_en"] ? pO["product_name_en"]: "Blank";
    let imgFrontDisplay = (((pO["selected_images"] || {})["front"] || {})["display"] || {})["en"] ? pO["selected_images"]["front"]["display"]["en"] : "#";
    let imgFrontThumb = (((pO["selected_images"] || {})["front"] || {})["thumb"] || {})["en"] ? pO["selected_images"]["front"]["thumb"]["en"] : "#";
    let imgNutrDisplay = (((pO["selected_images"] || {})["nutrition"] || {})["display"] || {})["en"] ? pO["selected_images"]["nutrition"]["display"]["en"] : "#";
    let productT = new Product();
      productT.id = id;
      productT.name = name;
      productT.keywords = pO["_keywords"];
      productT.ingredients = pO["ingredients_text_en"];
      productT.nutriments = pO["nutriments"];
      productT.nutriscore = pO["nutriscore_data"];
      productT.imageFrontDisplay = imgFrontDisplay;
      productT.imageFrontThumb = imgFrontThumb;
      productT.imageNutritionDisplay = imgNutrDisplay;
    return productT;
  }
}