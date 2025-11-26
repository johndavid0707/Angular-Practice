import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { deauthGuard } from './deauth-guard';

describe('deauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => deauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
