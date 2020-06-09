import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateSampleComponent } from './ng-template-sample.component';

describe('NgTemplateSampleComponent', () => {
  let component: NgTemplateSampleComponent;
  let fixture: ComponentFixture<NgTemplateSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
