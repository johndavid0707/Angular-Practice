import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteralizedErrorDisplay } from './centeralized-error-display';

describe('CenteralizedErrorDisplay', () => {
  let component: CenteralizedErrorDisplay;
  let fixture: ComponentFixture<CenteralizedErrorDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenteralizedErrorDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteralizedErrorDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
