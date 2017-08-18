import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';


import { AuthServiceLocal } from '../../services/auth/auth.service'
import { transition } from '@angular/animations';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authServiceLocal: AuthServiceLocal,
    private router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    let current_user_accesToken = JSON.parse(localStorage.getItem('currentAppUser'))
    let curent_user_userId = JSON.parse(localStorage.getItem('currentAppUserId'))
    
    if(current_user_accesToken && curent_user_userId){
      return true
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false
    }
  }
}


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
  /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isAuthenticated

    isAuthenticated = this.authServiceLocal.isAuthenticated()
    if(isAuthenticated){
      return true
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false
    }
  }*/
  /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    let isAuthenticated: boolean = false;
    let result = new EventEmitter<boolean> ();
    return this.authServiceLocal.isAuthenticated().then(response => {
      isAuthenticated = response;
      if (isAuthenticated) {

      } else {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        result.emit(false);
        result.complete();

      }
      // not logged in so redirect to login page with the return url
    })
    return Promise.resolve(result);
  }*/

  /*canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    return this.canActivate(route, state);
  }*/