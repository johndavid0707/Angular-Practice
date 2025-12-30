import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMessageHandling } from './validation-message-handling';

describe('ValidationMessageHandling', () => {
  let component: ValidationMessageHandling;
  let fixture: ComponentFixture<ValidationMessageHandling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationMessageHandling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationMessageHandling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
