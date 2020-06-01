import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorLastComponent } from './indicator-last.component';

describe('IndicatorLastComponent', () => {
  let component: IndicatorLastComponent;
  let fixture: ComponentFixture<IndicatorLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
