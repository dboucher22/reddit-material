import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class ToolbarModule { }
