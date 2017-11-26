import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

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
