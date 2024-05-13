import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExamenComponent } from './edit-examen.component';

describe('EditExamenComponent', () => {
  let component: EditExamenComponent;
  let fixture: ComponentFixture<EditExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditExamenComponent]
    });
    fixture = TestBed.createComponent(EditExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
