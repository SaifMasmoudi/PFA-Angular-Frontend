import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChargeHoraireComponent } from './edit-charge-horaire.component';

describe('EditChargeHoraireComponent', () => {
  let component: EditChargeHoraireComponent;
  let fixture: ComponentFixture<EditChargeHoraireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditChargeHoraireComponent]
    });
    fixture = TestBed.createComponent(EditChargeHoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
