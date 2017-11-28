import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { PreferencesPageComponent } from './preferences-page.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
    ],
    declarations: [PreferencesPageComponent]
})
export class PreferencesPageModule { }
