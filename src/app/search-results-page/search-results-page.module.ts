import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchResultsPageComponent } from './search-results-page.component';

// import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        CommonModule,
        // MaterialModule
    ],
    exports: [
        SearchResultsPageComponent
    ],
    declarations: [SearchResultsPageComponent]
})
export class SearchResultsPageModule { }
