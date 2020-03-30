import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowlMessageComponent } from './growl-message.component';


describe('GrowlMessageComponent', () => {
  let component: GrowlMessageComponent;
  let fixture: ComponentFixture<GrowlMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrowlMessageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowlMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
