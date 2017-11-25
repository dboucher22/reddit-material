import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { SearchComponent } from './search.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        SearchComponent
    ],
    declarations: [SearchComponent]
})
export class SearchModule { }
