import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../material.module';
import { DeactivateComponent } from './deactivate.component';

describe('DeactivateComponent', () => {
    let component: DeactivateComponent;
    let fixture: ComponentFixture<DeactivateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DeactivateComponent],
            imports: [BrowserAnimationsModule, MaterialModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DeactivateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
