import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

export const AuthGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    if (inject(LoginService).isLoggedIn()) {
      return true;
    }
    inject(NavigationService).goLogin();
    return false;
  }

