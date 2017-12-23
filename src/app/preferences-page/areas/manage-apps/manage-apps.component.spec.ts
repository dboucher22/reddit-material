import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppsComponent } from './manage-apps.component';

describe('ManageAppsComponent', () => {
  let component: ManageAppsComponent;
  let fixture: ComponentFixture<ManageAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
