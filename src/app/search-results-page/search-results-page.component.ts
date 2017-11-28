import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-search-results-page',
    templateUrl: './search-results-page.component.html',
    styleUrls: ['./search-results-page.component.scss']
})
export class SearchResultsPageComponent implements OnInit {
    routeParams$: Observable<any>;

    constructor(
        public activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.routeParams$ = this.activatedRoute.params;
    }
}
