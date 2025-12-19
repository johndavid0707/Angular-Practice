import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSyntax5 } from './template-syntax5';

describe('TemplateSyntax5', () => {
  let component: TemplateSyntax5;
  let fixture: ComponentFixture<TemplateSyntax5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSyntax5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateSyntax5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
