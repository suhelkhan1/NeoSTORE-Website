import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';


import { AuthService } from '../../services/auth/auth.service'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  isAuthenticated

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      
      this.isAuthenticated = this.authService.isAuthenticated()
      if (this.isAuthenticated) {
          return true
      } 

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false
  
  }
  /*canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    return this.canActivate(route, state);
  }*/
}