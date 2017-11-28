import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { PrefsOptionsModule } from './options/options.module';
import { PreferencesPageComponent } from './preferences-page.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        PrefsOptionsModule
    ],
    exports: [
        PrefsOptionsModule
    ],
    declarations: [PreferencesPageComponent]
})
export class PreferencesPageModule { }
