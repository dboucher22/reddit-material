import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../material.module';
import { FriendsComponent } from './friends.component';

describe('FriendsComponent', () => {
    let component: FriendsComponent;
    let fixture: ComponentFixture<FriendsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FriendsComponent],
            imports: [FormsModule, MaterialModule, BrowserAnimationsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FriendsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
