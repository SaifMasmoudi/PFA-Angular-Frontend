import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrimeComponent } from './edit-prime.component';

describe('EditPrimeComponent', () => {
  let component: EditPrimeComponent;
  let fixture: ComponentFixture<EditPrimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPrimeComponent]
    });
    fixture = TestBed.createComponent(EditPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
