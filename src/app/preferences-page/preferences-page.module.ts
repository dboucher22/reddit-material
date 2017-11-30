import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { PrefsEmailModule } from './email/email.module';
import { PrefsOptionsModule } from './options/options.module';
import { PreferencesPageComponent } from './preferences-page.component';
import { PreferencesRoutingModule } from './preferences-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        PreferencesRoutingModule,
        PrefsEmailModule,
        PrefsOptionsModule
    ],
    exports: [
        PrefsOptionsModule,
        PreferencesRoutingModule
    ],
    declarations: [PreferencesPageComponent]
})
export class PreferencesPageModule { }
