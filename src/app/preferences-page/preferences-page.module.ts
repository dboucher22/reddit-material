import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { PrefsOptionsModule } from './options/options.module';
import { PreferencesPageComponent } from './preferences-page.component';
import { PreferencesRoutingModule } from './preferences-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        PreferencesRoutingModule,
        PrefsOptionsModule
    ],
    exports: [
        PrefsOptionsModule,
        PreferencesRoutingModule
    ],
    declarations: [PreferencesPageComponent]
})
export class PreferencesPageModule { }
