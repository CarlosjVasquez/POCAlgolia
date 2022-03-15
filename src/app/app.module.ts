import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NgAisHighlightModule,
  NgAisHitsModule,
  NgAisInstantSearchModule,
  NgAisSearchBoxModule,
} from 'angular-instantsearch';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WidgetalgoliaComponent } from './components/widgetalgolia/widgetalgolia.component';
import { HtmlalgoliaComponent } from './components/htmlalgolia/htmlalgolia.component';
import { DirectserverComponent } from './components/directserver/directserver.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WidgetalgoliaComponent,
    HtmlalgoliaComponent,
    DirectserverComponent,
  ],
  imports: [
    BrowserModule,
    NgAisInstantSearchModule,
    NgAisSearchBoxModule,
    NgAisHitsModule,
    NgAisHighlightModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
