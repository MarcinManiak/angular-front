import { TestBed } from '@angular/core/testing';

import { SeminaryDatesService } from './seminary-dates.service';

describe('SeminaryDatesService', () => {
  let service: SeminaryDatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeminaryDatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
