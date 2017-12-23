import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutService } from '../layout/layout.service';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
    let component: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [HomePageComponent],
            providers: [
                LayoutService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
