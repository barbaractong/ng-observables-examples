import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeFormValidationComponent } from './native-form-validation.component';

describe('NativeFormValidationComponent', () => {
  let component: NativeFormValidationComponent;
  let fixture: ComponentFixture<NativeFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
