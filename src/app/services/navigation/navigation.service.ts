import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from './navigation.constants';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  goTo(link: string) {
    this.router.navigateByUrl(link);
  }

  goLogin() {
    this.goTo(ROUTES.LOGIN);
  }

  goHome() {
    this.goTo(ROUTES.HOME);
  }
}
