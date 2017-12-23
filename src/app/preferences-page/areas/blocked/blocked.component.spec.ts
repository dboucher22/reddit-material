import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../../material.module';
import { BlockedComponent } from './blocked.component';

describe('BlockedComponent', () => {
    let component: BlockedComponent;
    let fixture: ComponentFixture<BlockedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BlockedComponent],
            imports: [MaterialModule, FormsModule, BrowserAnimationsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
