import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsFieldComponent } from './dynamic-forms-field.component';

describe('DynamicFormsFieldComponent', () => {
  let component: DynamicFormsFieldComponent;
  let fixture: ComponentFixture<DynamicFormsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
