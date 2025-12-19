import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSyntax } from './template-syntax';

describe('TemplateSyntax', () => {
  let component: TemplateSyntax;
  let fixture: ComponentFixture<TemplateSyntax>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSyntax]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateSyntax);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
