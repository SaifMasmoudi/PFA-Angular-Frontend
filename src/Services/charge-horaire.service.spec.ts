import { TestBed } from '@angular/core/testing';

import { ChargeHoraireService } from './charge-horaire.service';

describe('ChargeHoraireService', () => {
  let service: ChargeHoraireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargeHoraireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
