import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { LayoutService } from '../layout.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {
    secondaryRowVisible$: BehaviorSubject<boolean>;
    constructor(private layoutService: LayoutService) { }

    ngOnInit() {
        this.secondaryRowVisible$ = this.layoutService.toolbarSecondaryRowVisibleState$;
    }
}
