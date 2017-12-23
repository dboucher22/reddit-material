import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from '../../../material.module';
import { OptionsComponent } from './options.component';

describe('OptionsComponent', () => {
    let component: OptionsComponent;
    let fixture: ComponentFixture<OptionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OptionsComponent],
            imports: [RouterTestingModule, MaterialModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OptionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
