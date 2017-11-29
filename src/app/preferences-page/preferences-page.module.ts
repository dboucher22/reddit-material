import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { PrefsOptionsModule } from './options/options.module';
import { PreferencesPageComponent } from './preferences-page.component';
import { PreferencesPageRoutingModule } from './preferences-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        PreferencesPageRoutingModule,
        PrefsOptionsModule
    ],
    exports: [
        PrefsOptionsModule,
        PreferencesPageRoutingModule
    ],
    declarations: [PreferencesPageComponent]
})
export class PreferencesPageModule { }
