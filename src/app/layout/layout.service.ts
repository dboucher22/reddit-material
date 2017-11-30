import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LayoutService {
    constructor() { }

    toolbarSecondaryRowVisibleState$ = new BehaviorSubject<boolean>(false);
    setToolbarSecondaryRowVisibleState$(value: boolean) {
        this.toolbarSecondaryRowVisibleState$.next(value);
    }
}
