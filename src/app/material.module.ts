import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
} from '@angular/material';

const materialImports = [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
];

@NgModule({
    imports: [
        // BrowserAnimationsModule,
        ...materialImports
    ],
    exports: [
        ...materialImports
    ],
    providers: []
})
export class MaterialModule { }
