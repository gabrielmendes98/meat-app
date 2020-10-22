import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad {
  constructor(private loginService: LoginService) {}

  canLoad(route: Route): boolean {
    const isLoggedIn = this.loginService.isLoggedIn();
    if (!isLoggedIn) {
      this.loginService.handleLogin(`/${route.path}`);
    }
    return isLoggedIn;
  }
}
