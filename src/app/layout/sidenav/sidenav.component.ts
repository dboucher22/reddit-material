import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Subreddit {
    id: number;
    name: string;
}

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {
    subreddits: Subreddit[] = [
        { id: 1, name: '4chan' },
        { id: 2, name: 'Cats' },
        { id: 3, name: 'Funny' },
        { id: 4, name: 'HoldMyBeer' },
        { id: 5, name: 'Jokes' },
        { id: 6, name: 'KateBeckinsale' },
        { id: 7, name: 'NSFW_GIF' },
        { id: 8, name: 'WatchItForThePlot' }
    ];

    constructor() { }

    ngOnInit() { }
}
