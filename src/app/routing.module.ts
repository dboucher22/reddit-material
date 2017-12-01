import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { NotFoundComponent } from './_http-status-pages/not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';

const routes: Route[] = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginPageComponent },
    {
        path: 'search', children: [
            { path: '', pathMatch: 'full', component: SearchResultsPageComponent },
            { path: ':searchterm', pathMatch: 'full', component: SearchResultsPageComponent }
        ]
    },
    {
        path: 'preferences', loadChildren: './preferences-page/preferences-page.module#PreferencesPageModule'
    },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class RoutingModule { }
