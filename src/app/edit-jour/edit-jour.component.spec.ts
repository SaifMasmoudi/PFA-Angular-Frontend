import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJourComponent } from './edit-jour.component';

describe('EditJourComponent', () => {
  let component: EditJourComponent;
  let fixture: ComponentFixture<EditJourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditJourComponent]
    });
    fixture = TestBed.createComponent(EditJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
