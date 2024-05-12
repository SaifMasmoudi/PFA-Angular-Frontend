import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauMatiereComponent } from './niveau-matiere.component';

describe('NiveauMatiereComponent', () => {
  let component: NiveauMatiereComponent;
  let fixture: ComponentFixture<NiveauMatiereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NiveauMatiereComponent]
    });
    fixture = TestBed.createComponent(NiveauMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
