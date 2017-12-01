import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { BlockedComponent } from './blocked.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule
    ],
    declarations: [BlockedComponent]
})
export class PrefsBlockedModule { }
