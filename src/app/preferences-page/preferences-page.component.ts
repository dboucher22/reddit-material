import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { LayoutService } from '../layout/layout.service';

@Component({
    selector: 'app-preferences-page',
    templateUrl: './preferences-page.component.html',
    styleUrls: ['./preferences-page.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PreferencesPageComponent implements OnInit {
    constructor(private layoutService: LayoutService) { }

    ngOnInit() {
        this.layoutService.setToolbarSecondaryRowVisibleState$(false);
    }
}
