import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSyntax3 } from './template-syntax3';

describe('TemplateSyntax3', () => {
  let component: TemplateSyntax3;
  let fixture: ComponentFixture<TemplateSyntax3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSyntax3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateSyntax3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
