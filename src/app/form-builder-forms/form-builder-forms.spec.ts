import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderForms } from './form-builder-forms';

describe('FormBuilderForms', () => {
  let component: FormBuilderForms;
  let fixture: ComponentFixture<FormBuilderForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuilderForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilderForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
