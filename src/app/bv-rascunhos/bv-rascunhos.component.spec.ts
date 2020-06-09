import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BVRascunhosComponent } from './bv-rascunhos.component';

describe('BVRascunhosComponent', () => {
  let component: BVRascunhosComponent;
  let fixture: ComponentFixture<BVRascunhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BVRascunhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BVRascunhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
