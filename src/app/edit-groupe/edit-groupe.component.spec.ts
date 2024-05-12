import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupeComponent } from './edit-groupe.component';

describe('EditGroupeComponent', () => {
  let component: EditGroupeComponent;
  let fixture: ComponentFixture<EditGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGroupeComponent]
    });
    fixture = TestBed.createComponent(EditGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
