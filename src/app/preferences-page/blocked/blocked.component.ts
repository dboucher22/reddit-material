import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-blocked',
    templateUrl: './blocked.component.html',
    styleUrls: ['./blocked.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BlockedComponent implements OnInit {
    blockedUsers = [];
    userToBlock = null;

    constructor() { }

    ngOnInit() { }

    onAddToBlockedClicked() {
        if (this.userToBlock && this.userToBlock.length) {
            this.blockedUsers.push(this.userToBlock);
            this.userToBlock = null;
        }
    }
}
