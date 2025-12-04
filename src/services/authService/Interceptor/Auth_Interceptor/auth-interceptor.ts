import { HttpInterceptorFn } from '@angular/common/http';
import { SKIP_AUTH } from '../../../../SKIP_AUTH/skip-auth.token';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // 👉 Check if this request wants to skip auth
  if (req.context.get(SKIP_AUTH)) {
    console.log('🔵 Auth skipped for:', req.url);
    return next(req);
  }

  // Otherwise attach token
  const token = localStorage.getItem('access_token');

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  console.log('🟢 Token attached for:', req.url);
  
  return next(authReq);
};
