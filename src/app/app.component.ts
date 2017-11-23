import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    subreddits: Subreddit[] = [
        { id: 1, name: '4chan' },
        { id: 2, name: 'Cats' },
        { id: 3, name: 'Funny' },
        { id: 4, name: 'HoldMyBeer' }
        { id: 5, name: 'Jokes' }
        { id: 6, name: 'KateBeckinsale' }
        { id: 7, name: 'NSFW_GIF' }
        { id: 8, name: 'WatchItForThePlot' }
    ];
}

export interface Subreddit {
    id: number;
    name: string;
}
