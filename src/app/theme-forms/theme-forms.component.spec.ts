import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeFormsComponent } from './theme-forms.component';

describe('ThemeFormsComponent', () => {
  let component: ThemeFormsComponent;
  let fixture: ComponentFixture<ThemeFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
