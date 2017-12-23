import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { PrefsBlockedModule } from './areas/blocked/blocked.module';
import { PrefsDeactivateModule } from './areas/deactivate/deactivate.module';
import { PrefsEmailModule } from './areas/email/email.module';
import { PrefsFriendsModule } from './areas/friends/friends.module';
import { PrefsManageAppsModule } from './areas/manage-apps/manage-apps.module';
import { PrefsOptionsModule } from './areas/options/options.module';
import { PrefsPasswordModule } from './areas/password/password.module';
import { PreferencesPageComponent } from './preferences-page.component';
import { PreferencesRoutingModule } from './preferences-routing.module';
import { PrefsRssFeedsModule } from './areas/rss-feeds/rss-feeds.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        PreferencesRoutingModule,
        PrefsBlockedModule,
        PrefsDeactivateModule,
        PrefsFriendsModule,
        PrefsEmailModule,
        PrefsManageAppsModule,
        PrefsOptionsModule,
        PrefsPasswordModule,
        PrefsRssFeedsModule
    ],
    exports: [
        PreferencesRoutingModule
    ],
    declarations: [PreferencesPageComponent]
})
export class PreferencesPageModule { }
