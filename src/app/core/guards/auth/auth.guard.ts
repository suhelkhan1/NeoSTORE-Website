import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';


import { AuthServiceLocal } from '../../services/auth/auth.service'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authServiceLocal: AuthServiceLocal,
    private router: Router
  ){}

  //isAuthenticated: boolean = false

  /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isAuthenticated: boolean = false
    this.authServiceLocal.isAuthenticated().then(response => isAuthenticated = response)

    if(isAuthenticated){
      return true
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false
  }*/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isAuthenticated

    isAuthenticated = this.authServiceLocal.isAuthenticated()
    if(isAuthenticated){
      return true
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false
    }
  }
  /*canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    return this.canActivate(route, state);
  }*/
}
