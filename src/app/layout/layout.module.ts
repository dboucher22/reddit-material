import { NgModule } from '@angular/core';

import { LayoutService } from './layout.service';
import { SearchModule } from './search/search.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';

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
    ],
    providers: [
        LayoutService
    ]
})
export class LayoutModule { }
