import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material.module';
import { OptionsComponent } from './options.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    declarations: [OptionsComponent]
})
export class PrefsOptionsModule { }
