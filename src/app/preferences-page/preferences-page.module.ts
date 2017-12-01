import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { PrefsBlockedModule } from './blocked/blocked.module';
import { PrefsDeactivateModule } from './deactivate/deactivate.module';
import { PrefsEmailModule } from './email/email.module';
import { PrefsOptionsModule } from './options/options.module';
import { PrefsPasswordModule } from './password/password.module';
import { PreferencesPageComponent } from './preferences-page.component';
import { PreferencesRoutingModule } from './preferences-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        PreferencesRoutingModule,
        PrefsBlockedModule,
        PrefsDeactivateModule,
        PrefsEmailModule,
        PrefsOptionsModule,
        PrefsPasswordModule
    ],
    exports: [
        PreferencesRoutingModule
    ],
    declarations: [PreferencesPageComponent]
})
export class PreferencesPageModule { }
