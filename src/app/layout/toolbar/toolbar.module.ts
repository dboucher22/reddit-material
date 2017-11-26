import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { SearchModule } from '../search/search.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        SearchModule
    ]
})
export class ToolbarModule { }
