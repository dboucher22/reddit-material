import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../../material.module';
import { RssFeedsComponent } from './rss-feeds.component';

describe('RssFeedsComponent', () => {
    let component: RssFeedsComponent;
    let fixture: ComponentFixture<RssFeedsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RssFeedsComponent],
            imports: [BrowserAnimationsModule, MaterialModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RssFeedsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
