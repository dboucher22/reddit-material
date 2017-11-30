import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { EmailComponent } from './email/email.component';
import { OptionsComponent } from './options/options.component';
import { PasswordComponent } from './password/password.component';
import { PreferencesPageComponent } from './preferences-page.component';

const routes: Route[] = [
    {
        path: 'preferences',
        component: PreferencesPageComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'options' },
            { path: 'options', pathMatch: 'full', component: OptionsComponent },
            { path: 'apps', pathMatch: 'full', component: OptionsComponent },
            { path: 'rss-feeds', pathMatch: 'full', component: OptionsComponent },
            { path: 'friends', pathMatch: 'full', component: OptionsComponent },
            { path: 'blocked', pathMatch: 'full', component: OptionsComponent },
            { path: 'email', pathMatch: 'full', component: EmailComponent },
            { path: 'password', pathMatch: 'full', component: PasswordComponent },
            { path: 'deactivate', pathMatch: 'full', component: OptionsComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class PreferencesRoutingModule { }
