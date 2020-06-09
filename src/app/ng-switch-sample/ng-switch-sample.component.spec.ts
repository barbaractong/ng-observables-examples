import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchSampleComponent } from './ng-switch-sample.component';

describe('NgSwitchSampleComponent', () => {
  let component: NgSwitchSampleComponent;
  let fixture: ComponentFixture<NgSwitchSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
