import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNiveauComponent } from './create-niveau.component';

describe('CreateNiveauComponent', () => {
  let component: CreateNiveauComponent;
  let fixture: ComponentFixture<CreateNiveauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNiveauComponent]
    });
    fixture = TestBed.createComponent(CreateNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
