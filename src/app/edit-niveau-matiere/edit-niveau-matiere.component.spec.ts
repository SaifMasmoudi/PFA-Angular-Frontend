import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNiveauMatiereComponent } from './edit-niveau-matiere.component';

describe('EditNiveauMatiereComponent', () => {
  let component: EditNiveauMatiereComponent;
  let fixture: ComponentFixture<EditNiveauMatiereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditNiveauMatiereComponent]
    });
    fixture = TestBed.createComponent(EditNiveauMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
