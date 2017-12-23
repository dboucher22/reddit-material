import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
    friendToAdd = null;
    friends = [];

    constructor() { }

    ngOnInit() { }

    onAddFriendClicked() {
        if (this.friendToAdd && this.friendToAdd.length) {
            this.friends.push(this.friendToAdd);
            this.friendToAdd = null;
        }
    }
}
