import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { PasswordComponent } from './password.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    exports: [],
    declarations: [PasswordComponent]
})
export class PrefsPasswordModule { }
