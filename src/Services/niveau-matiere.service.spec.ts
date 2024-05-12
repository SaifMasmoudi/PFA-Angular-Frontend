import { TestBed } from '@angular/core/testing';

import { NiveauMatiereService } from './niveau-matiere.service';

describe('NiveauMatiereService', () => {
  let service: NiveauMatiereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NiveauMatiereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
