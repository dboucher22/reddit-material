import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialImports = [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
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
