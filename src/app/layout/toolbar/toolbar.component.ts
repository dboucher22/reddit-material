import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {
    inboxVisible = true; // remove when not used in html

    @Input() loggedIn = true; // remove when not used in html
    @Output() login = new EventEmitter<boolean>();
    @Output() logout = new EventEmitter<boolean>();

    constructor(private router: Router) { }

    ngOnInit() {
    }

    logIn() {
        this.loggedIn = true;
        this.login.emit(this.loggedIn);
    }

    logOut() {
        this.loggedIn = false;
        this.logout.emit(this.loggedIn);
    }
}
