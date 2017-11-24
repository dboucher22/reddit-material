import { NgModule } from '@angular/core';

import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
    imports: [
        SidenavModule,
        ToolbarModule
    ],
    exports: [
        SidenavModule,
        ToolbarModule
    ]
})
export class LayoutModule { }
