import { CanActivateFn, Router } from '@angular/router';
import { LogingService } from '../../services/login/loging.service';
import { inject } from '@angular/core';

export const userGuardGuard: CanActivateFn = (route, state) => {

  const authToken = inject(LogingService);
  const router = inject(Router);

  if (!authToken.isAuthenticate()) { 
    return true;
  }

  return router.navigate(['/login']); 
};
