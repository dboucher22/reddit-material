import { Component } from '@angular/core';
import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    loggedIn = true;

    login(loggedIn: boolean) {
        this.loggedIn = loggedIn;
    }

    logout(loggedIn: boolean) {
        this.loggedIn = loggedIn;
    }
}
