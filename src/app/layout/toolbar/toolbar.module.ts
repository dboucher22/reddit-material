import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { SearchModule } from '../search/search.module';

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
        SearchModule
    ]
})
export class ToolbarModule { }
