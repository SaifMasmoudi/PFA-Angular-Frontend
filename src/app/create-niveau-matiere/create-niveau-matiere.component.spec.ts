import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNiveauMatiereComponent } from './create-niveau-matiere.component';

describe('CreateNiveauMatiereComponent', () => {
  let component: CreateNiveauMatiereComponent;
  let fixture: ComponentFixture<CreateNiveauMatiereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNiveauMatiereComponent]
    });
    fixture = TestBed.createComponent(CreateNiveauMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
