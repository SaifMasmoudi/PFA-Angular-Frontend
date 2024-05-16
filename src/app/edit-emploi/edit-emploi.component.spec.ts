import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmploiComponent } from './edit-emploi.component';

describe('EditEmploiComponent', () => {
  let component: EditEmploiComponent;
  let fixture: ComponentFixture<EditEmploiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEmploiComponent]
    });
    fixture = TestBed.createComponent(EditEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
