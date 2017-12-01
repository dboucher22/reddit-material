import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../material.module';
import { EmailComponent } from './email.component';

describe('EmailComponent', () => {
    let component: EmailComponent;
    let fixture: ComponentFixture<EmailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmailComponent],
            imports: [MaterialModule, BrowserAnimationsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
