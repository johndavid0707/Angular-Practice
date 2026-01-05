import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralizingFormState } from './centralizing-form-state';

describe('CentralizingFormState', () => {
  let component: CentralizingFormState;
  let fixture: ComponentFixture<CentralizingFormState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralizingFormState]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralizingFormState);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
