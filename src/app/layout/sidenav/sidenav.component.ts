import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

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
    @Input() loggedIn = false;

    communities: Subreddit[] = [
        { id: 1, name: '4chan' },
        { id: 2, name: 'Cats' },
        { id: 111, name: 'Celebs' },
        { id: 112, name: 'EmilyRatajkowski' },
        { id: 3, name: 'Funny' },
        { id: 113, name: 'Gaming' },
        { id: 114, name: 'GentlemanBoners' },
        { id: 115, name: 'GTAOnline' },
        { id: 4, name: 'HoldMyBeer' },
        { id: 116, name: 'JessicaLowndes' },
        { id: 5, name: 'Jokes' },
        { id: 6, name: 'KateBeckinsale' },
        { id: 7, name: 'NSFW_GIF' },
        { id: 117, name: 'NSFWCosplay' },
        { id: 118, name: 'NYGiants' },
        { id: 119, name: 'RandomSexiness' },
        { id: 120, name: 'RealGirls' },
        { id: 121, name: 'Unexpected' },
        { id: 8, name: 'WatchItForThePlot' }
    ];
    popularCommunities = this.communities;

    constructor() { }

    ngOnInit() { }
}
