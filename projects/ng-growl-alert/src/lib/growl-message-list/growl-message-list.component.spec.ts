import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowlMessageListComponent } from './growl-message-list.component';


describe('GrowlMessageListComponent', () => {
  let component: GrowlMessageListComponent;
  let fixture: ComponentFixture<GrowlMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrowlMessageListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowlMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
