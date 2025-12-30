import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedForm } from './advanced-form';

describe('AdvancedForm', () => {
  let component: AdvancedForm;
  let fixture: ComponentFixture<AdvancedForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
