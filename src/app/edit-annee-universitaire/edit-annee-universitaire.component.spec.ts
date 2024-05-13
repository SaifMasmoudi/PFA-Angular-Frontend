import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnneeUniversitaireComponent } from './edit-annee-universitaire.component';

describe('EditAnneeUniversitaireComponent', () => {
  let component: EditAnneeUniversitaireComponent;
  let fixture: ComponentFixture<EditAnneeUniversitaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAnneeUniversitaireComponent]
    });
    fixture = TestBed.createComponent(EditAnneeUniversitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
