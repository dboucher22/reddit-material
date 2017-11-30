import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { EmailComponent } from './email.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    exports: [EmailComponent],
    declarations: [EmailComponent]
})
export class PrefsEmailModule { }
