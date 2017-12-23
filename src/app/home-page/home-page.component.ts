import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LayoutService } from '../layout/layout.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
    constructor(
        private layoutService: LayoutService) { }

    ngOnInit() {
        this.layoutService.setToolbarSecondaryRowVisibleState$(true);
    }
}
