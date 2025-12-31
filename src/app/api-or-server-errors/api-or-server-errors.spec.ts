import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiOrServerErrors } from './api-or-server-errors';

describe('ApiOrServerErrors', () => {
  let component: ApiOrServerErrors;
  let fixture: ComponentFixture<ApiOrServerErrors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiOrServerErrors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiOrServerErrors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
