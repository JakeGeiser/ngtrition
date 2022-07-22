import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductFetchComponent } from './product/product-fetch/product-fetch.component';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component';
import { CompareComponent } from './compare/compare.component';
import { CompareItemComponent } from './compare/compare-item/compare-item.component';
import { SearchComponent } from './search/search.component';
import { OptionsComponent } from './search/options/options.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ApiHttpService } from './services/api-http.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFetchComponent,
    ProductItemComponent,
    CompareComponent,
    CompareItemComponent,
    SearchComponent,
    OptionsComponent,
    GetStartedComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiHttpService,SearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
