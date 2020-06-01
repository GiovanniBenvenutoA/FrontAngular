import { TestBed } from '@angular/core/testing';

import { SelectDateService } from './select-date.service';

describe('SelectDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectDateService = TestBed.get(SelectDateService);
    expect(service).toBeTruthy();
  });
});
