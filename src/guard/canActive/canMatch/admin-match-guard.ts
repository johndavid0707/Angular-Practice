import { CanActivateFn, CanMatchFn, Route, UrlSegment } from '@angular/router';

import { inject } from '@angular/core';
import { AuthsService } from '../../../services/authService/canMatch/auths-service';

export const adminMatchGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const auth = inject(AuthsService);

return auth.userRole() === 'admin'; // only allow admin
};
