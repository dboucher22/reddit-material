import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../material.module';
import { SearchComponent } from './search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    exports: [
        SearchComponent
    ],
    declarations: [SearchComponent]
})
export class SearchModule { }
