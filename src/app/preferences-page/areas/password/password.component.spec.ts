import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../../material.module';
import { PasswordComponent } from './password.component';

describe('PasswordComponent', () => {
    let component: PasswordComponent;
    let fixture: ComponentFixture<PasswordComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PasswordComponent],
            imports: [MaterialModule, BrowserAnimationsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
