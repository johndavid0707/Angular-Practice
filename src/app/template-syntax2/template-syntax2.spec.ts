import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSyntax2 } from './template-syntax2';

describe('TemplateSyntax2', () => {
  let component: TemplateSyntax2;
  let fixture: ComponentFixture<TemplateSyntax2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSyntax2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateSyntax2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
