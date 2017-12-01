import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../material.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [NotFoundComponent],
    declarations: [NotFoundComponent]
})
export class NotFoundModule { }
