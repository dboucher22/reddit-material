import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
    imports: [
        CommonModule,
        NotFoundModule
    ],
    exports: []
})
export class HttpStatusPagesModule { }
