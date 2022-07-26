import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { OptionsComponent } from './search/options/options.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ApiHttpService } from './services/api-http.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    OptionsComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
