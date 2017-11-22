import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule, MatToolbarModule } from '@angular/material';

const materialImports = [
    MatIconModule,
    MatToolbarModule
];

@NgModule({
    imports: [
        BrowserAnimationsModule,
        ...materialImports
    ],
    exports: [
        ...materialImports
    ],
    providers: []
})
export class MaterialModule { }
