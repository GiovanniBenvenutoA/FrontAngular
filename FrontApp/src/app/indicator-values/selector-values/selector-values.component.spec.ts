import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorValuesComponent } from './selector-values.component';

describe('SelectorValuesComponent', () => {
  let component: SelectorValuesComponent;
  let fixture: ComponentFixture<SelectorValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
