import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeHoraireComponent } from './charge-horaire.component';

describe('ChargeHoraireComponent', () => {
  let component: ChargeHoraireComponent;
  let fixture: ComponentFixture<ChargeHoraireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChargeHoraireComponent]
    });
    fixture = TestBed.createComponent(ChargeHoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
