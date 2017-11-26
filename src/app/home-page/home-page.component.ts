import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CommunitiesService } from '../services/communities.service';

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
    result: Observable<any>;

    constructor(private communitiesService: CommunitiesService) { }

    ngOnInit() {
        this.result = this.communitiesService.getAll();
        this.result.subscribe(item => console.log(item));
    }
}
