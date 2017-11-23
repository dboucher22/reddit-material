import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

const materialImports = [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule
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
