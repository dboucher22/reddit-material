import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

const routes: Route[] = [
    { path: '', component: HomePageComponent }
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
