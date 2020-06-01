import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorDateComponent } from './selector-date.component';

describe('SelectorDateComponent', () => {
  let component: SelectorDateComponent;
  let fixture: ComponentFixture<SelectorDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
