import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJourComponent } from './create-jour.component';

describe('CreateJourComponent', () => {
  let component: CreateJourComponent;
  let fixture: ComponentFixture<CreateJourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateJourComponent]
    });
    fixture = TestBed.createComponent(CreateJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
