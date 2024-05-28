import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHoraireComponent } from './edit-horaire.component';

describe('EditHoraireComponent', () => {
  let component: EditHoraireComponent;
  let fixture: ComponentFixture<EditHoraireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHoraireComponent]
    });
    fixture = TestBed.createComponent(EditHoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
