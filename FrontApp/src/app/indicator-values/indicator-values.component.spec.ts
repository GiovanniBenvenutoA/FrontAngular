import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorValuesComponent } from './indicator-values.component';

describe('IndicatorValuesComponent', () => {
  let component: IndicatorValuesComponent;
  let fixture: ComponentFixture<IndicatorValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
