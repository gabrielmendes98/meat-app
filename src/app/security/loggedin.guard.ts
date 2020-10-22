import { Injectable } from '@angular/core';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {
  constructor(private loginService: LoginService) {}

  checkAuthentication(path: string) {
    const isLoggedIn = this.loginService.isLoggedIn();
    if (!isLoggedIn) {
      this.loginService.handleLogin(`/${path}`);
    }
    return isLoggedIn;
  }

  canLoad(route: Route): boolean {
    return this.checkAuthentication(route.path);
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): boolean {
    return this.checkAuthentication(activatedRoute.routeConfig.path);
  }
}
