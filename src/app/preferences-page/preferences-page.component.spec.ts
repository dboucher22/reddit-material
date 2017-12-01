import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LayoutService } from '../layout/layout.service';
import { MaterialModule } from '../material.module';
import { PreferencesPageComponent } from './preferences-page.component';

describe('PreferencesPageComponent', () => {
    let component: PreferencesPageComponent;
    let fixture: ComponentFixture<PreferencesPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                RouterTestingModule
            ],
            declarations: [PreferencesPageComponent],
            providers: [LayoutService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PreferencesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
