import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChargeHoraireComponent } from './create-charge-horaire.component';

describe('CreateChargeHoraireComponent', () => {
  let component: CreateChargeHoraireComponent;
  let fixture: ComponentFixture<CreateChargeHoraireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateChargeHoraireComponent]
    });
    fixture = TestBed.createComponent(CreateChargeHoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
