import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingForms } from './error-handling-forms';

describe('ErrorHandlingForms', () => {
  let component: ErrorHandlingForms;
  let fixture: ComponentFixture<ErrorHandlingForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorHandlingForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHandlingForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
