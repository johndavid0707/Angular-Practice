import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSyntax4 } from './template-syntax4';

describe('TemplateSyntax4', () => {
  let component: TemplateSyntax4;
  let fixture: ComponentFixture<TemplateSyntax4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSyntax4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateSyntax4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
