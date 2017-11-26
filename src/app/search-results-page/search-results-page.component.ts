import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'app-search-results-page',
    templateUrl: './search-results-page.component.html',
    styleUrls: ['./search-results-page.component.scss']
})
export class SearchResultsPageComponent implements OnInit, OnDestroy {
    searchTerm = '';

    subscribers: Subscription[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.subscribers.push(this.activatedRoute.params
            .subscribe(param => {
                this.searchTerm = param['searchterm'] || '';
            }));
    }

    ngOnDestroy() {
        this.subscribers.forEach(item => item.unsubscribe());
        this.subscribers.length = 0;
    }
}
