import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../layout/layout.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    constructor(private layoutService: LayoutService) { }

    ngOnInit() {
        this.layoutService.setToolbarSecondaryRowVisibleState$(false);
    }
}
