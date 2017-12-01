import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BlockedComponent } from './blocked/blocked.component';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { EmailComponent } from './email/email.component';
import { FriendsComponent } from './friends/friends.component';
import { OptionsComponent } from './options/options.component';
import { PasswordComponent } from './password/password.component';
import { PreferencesPageComponent } from './preferences-page.component';
import { RssFeedsComponent } from './rss-feeds/rss-feeds.component';

const routes: Route[] = [
    {
        path: 'preferences',
        component: PreferencesPageComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'options' },
            { path: 'options', pathMatch: 'full', component: OptionsComponent },
            { path: 'apps', pathMatch: 'full', component: OptionsComponent },
            { path: 'rss-feeds', pathMatch: 'full', component: RssFeedsComponent },
            { path: 'friends', pathMatch: 'full', component: FriendsComponent },
            { path: 'blocked', pathMatch: 'full', component: BlockedComponent },
            { path: 'email', pathMatch: 'full', component: EmailComponent },
            { path: 'password', pathMatch: 'full', component: PasswordComponent },
            { path: 'deactivate', pathMatch: 'full', component: DeactivateComponent }
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
