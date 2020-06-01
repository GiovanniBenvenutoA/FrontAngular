import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorDateComponent } from './indicator-date.component';

describe('IndicatorDateComponent', () => {
  let component: IndicatorDateComponent;
  let fixture: ComponentFixture<IndicatorDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
