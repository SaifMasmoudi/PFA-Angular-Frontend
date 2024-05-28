import { TestBed } from '@angular/core/testing';

import { JourService } from './jour.service';

describe('JourService', () => {
  let service: JourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
