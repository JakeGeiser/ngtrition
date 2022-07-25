import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { Product } from '../product/product.model';
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

  getSearchResults(){
    return this.searchResults;
  }
  

}
