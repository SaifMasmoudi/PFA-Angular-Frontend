import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmploiComponent } from './create-emploi.component';

describe('CreateEmploiComponent', () => {
  let component: CreateEmploiComponent;
  let fixture: ComponentFixture<CreateEmploiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmploiComponent]
    });
    fixture = TestBed.createComponent(CreateEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
