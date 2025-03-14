import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { inject } from '@angular/core';

export const userGuardGuard: CanActivateFn = (route, state) => {

  const cookieService = inject(CookieService);
  const router = inject(Router);

  // if (!cookieService.check('token')) { 
  //   router.navigate(['/login']); // Redirige si la cookie no existe
  //   return false;
  // }

  return true;
};
