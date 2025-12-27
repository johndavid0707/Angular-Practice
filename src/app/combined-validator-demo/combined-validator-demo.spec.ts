import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedValidatorDemo } from './combined-validator-demo';

describe('CombinedValidatorDemo', () => {
  let component: CombinedValidatorDemo;
  let fixture: ComponentFixture<CombinedValidatorDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombinedValidatorDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinedValidatorDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
