import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface Submission {
    id: number;
    title: string;
    imageUrl: string;
    thumbnailUrl: string;
    user: string;
    community: string;
    timeString: string;
}

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
    submissions: Submission[] = [
        {
            id: 1,
            community: 'Mock Community',
            timeString: '1 hour',
            imageUrl: '',
            thumbnailUrl: 'https://b.thumbs.redditmedia.com/9b-uOE0aGBGLydL5UHSqx2RbYf7WW-4rPPc-U3os2ug.jpg',
            title: 'Title 1',
            user: 'user1'
        },
        {
            id: 2,
            community: 'Mock Community 2',
            timeString: '12 minutes',
            imageUrl: '',
            thumbnailUrl: 'https://b.thumbs.redditmedia.com/dB1wHT3nQkbkLkU5_6QYvNX_ncFzXHaq0KKshYibP2M.jpg',
            title: 'This is an extremely long title so I can test how the cards wrap. ' +
                'I might need to add a bottom margin to the card-details div. Edit: Looks good now.',
            user: 'user2'
        },
        {
            id: 3,
            community: 'Mock Community',
            timeString: '1 hour',
            imageUrl: '',
            thumbnailUrl: 'https://b.thumbs.redditmedia.com/9b-uOE0aGBGLydL5UHSqx2RbYf7WW-4rPPc-U3os2ug.jpg',
            title: 'Title 1',
            user: 'user1'
        },
        {
            id: 4,
            community: 'Mock Community 2',
            timeString: '12 minutes',
            imageUrl: '',
            thumbnailUrl: 'https://b.thumbs.redditmedia.com/dB1wHT3nQkbkLkU5_6QYvNX_ncFzXHaq0KKshYibP2M.jpg',
            title: 'This is an extremely long title so I can test how the cards wrap. ' +
                'I might need to add a bottom margin to the card-details div. Edit: Looks good now.',
            user: 'user2'
        }
    ];

    constructor() { }

    ngOnInit() { }
}
