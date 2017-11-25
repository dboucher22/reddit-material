import { NgModule } from '@angular/core';

import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { SearchModule } from './search/search.module';

@NgModule({
    imports: [
        SearchModule,
        SidenavModule,
        ToolbarModule
    ],
    exports: [
        SearchModule,
        SidenavModule,
        ToolbarModule
    ]
})
export class LayoutModule { }
