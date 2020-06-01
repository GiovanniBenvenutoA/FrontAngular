import { TestBed } from '@angular/core/testing';

import { SelectValuesService } from './select-values.service';

describe('SelectValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectValuesService = TestBed.get(SelectValuesService);
    expect(service).toBeTruthy();
  });
});
