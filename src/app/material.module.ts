import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';

const materialImports = [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
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
