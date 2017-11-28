import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../material.module';
import { OptionsComponent } from './options.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [OptionsComponent],
    declarations: [OptionsComponent]
})
export class PrefsOptionsModule { }
