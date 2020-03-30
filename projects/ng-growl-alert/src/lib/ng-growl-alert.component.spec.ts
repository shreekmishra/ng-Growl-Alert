import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGrowlAlertComponent } from './ng-growl-alert.component';

describe('NgGrowlAlertComponent', () => {
  let component: NgGrowlAlertComponent;
  let fixture: ComponentFixture<NgGrowlAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGrowlAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGrowlAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
