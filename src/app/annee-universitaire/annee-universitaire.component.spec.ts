import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneeUniversitaireComponent } from './annee-universitaire.component';

describe('AnneeUniversitaireComponent', () => {
  let component: AnneeUniversitaireComponent;
  let fixture: ComponentFixture<AnneeUniversitaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnneeUniversitaireComponent]
    });
    fixture = TestBed.createComponent(AnneeUniversitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
