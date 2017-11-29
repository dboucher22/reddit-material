import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { LayoutModule } from './layout/layout.module';
import { LoginPageModule } from './login-page/login-page.module';
import { MaterialModule } from './material.module';
import { PreferencesPageModule } from './preferences-page/preferences-page.module';
import { PreferencesRoutingModule } from './preferences-page/preferences-routing.module';
import { RoutingModule } from './routing.module';
import { SearchResultsPageModule } from './search-results-page/search-results-page.module';
import { ServicesModule } from './services/services.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        HomePageModule,
        LayoutModule,
        LoginPageModule,
        MaterialModule,
        PreferencesPageModule,
        PreferencesRoutingModule,
        RoutingModule,
        SearchResultsPageModule,
        ServicesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
