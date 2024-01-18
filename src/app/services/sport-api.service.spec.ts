import { TestBed } from '@angular/core/testing';

import { SportApiService } from './sport-api.service';

describe('SportApiService', () => {
  let service: SportApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
