import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';

import { HomePageModule } from './home-page/home-page.module';
import { LayoutModule } from './layout/layout.module';
import { RoutingModule } from './routing.module';
import { SearchResultsPageModule } from './search-results-page/search-results-page.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        HomePageModule,
        LayoutModule,
        SearchResultsPageModule,
        RoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
