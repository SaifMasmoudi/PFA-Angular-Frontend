import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnneeUniversitaireComponent } from './create-annee-universitaire.component';

describe('CreateAnneeUniversitaireComponent', () => {
  let component: CreateAnneeUniversitaireComponent;
  let fixture: ComponentFixture<CreateAnneeUniversitaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAnneeUniversitaireComponent]
    });
    fixture = TestBed.createComponent(CreateAnneeUniversitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
