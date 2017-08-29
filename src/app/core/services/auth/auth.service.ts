import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs'
import { IUserLoginResponse } from '../../models/user-login.model'
import { IUser } from '../../models/user.model'
import { userUrl } from '../../apiUrls';


@Injectable()
export class AuthServiceLocal {

  constructor(
    private http: Http
  ) {}

  loggedIn: boolean = false
  accessToken: string

  login(loginCrendentials): Observable<IUserLoginResponse>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(userUrl + 'login', JSON.stringify(loginCrendentials), options).map((response: Response) => {
      let user = <IUserLoginResponse>response.json();
      if (user && user.id) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentAppUser', JSON.stringify(user.id));
          localStorage.setItem('currentAppUserId', JSON.stringify(user.userId));
          this.loggedIn = true
          return response.json();
      }
    }).catch(this.handleError)
  }

  socailLogin(socailResponse): Observable<IUserLoginResponse>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(userUrl + 'loginSocial', JSON.stringify(socailResponse), options).map((response: Response) => {
      let user = <IUserLoginResponse>response.json();
      console.log('User Service', user)
      if (user && user.id) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentAppUser', JSON.stringify(user.id));
          localStorage.setItem('currentAppUserId', JSON.stringify(user.userId));
          this.loggedIn = true
          return response.json();
      }
    }).catch(this.handleError)
  }

  register(userInfo){   
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(userUrl, JSON.stringify(userInfo), options).map( (response: Response) => {
      return <IUser>response.json()
    }).catch(this.handleError)
  }

  logout() {
    this.accessToken = JSON.parse(localStorage.getItem('currentAppUser'))
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(userUrl + 'logout?access_token=' + this.accessToken, options).map( (response: Response)=>{
      // remove user from local storage to log user out
      localStorage.removeItem('currentAppUser');
      localStorage.removeItem('currentAppUserId');
      return response.json()
    }).catch(this.handleError)
  }

   resetPassword(email): Observable<string>{   
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(userUrl +'reset', JSON.stringify(email), options).map( (response: Response) => {
      return <string>response.json()
    }).catch(this.handleError)
  }

  setPassword(setInfo): Observable<string>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let password = {
      newPassword: setInfo.password
    }
    return this.http.post(userUrl +'reset-password'+'?access_token='+ setInfo.token , JSON.stringify(password), options).map( (response: Response) => {
      return <string>response.json()
    }).catch(this.handleError)
  }

  ifLoggedIn(){
    return this.loggedIn
  }

  /*isAuthenticated(): Promise<any>{
    let current_user_accesToken = JSON.parse(localStorage.getItem('currentAppUser'))
    let curent_user_userId = JSON.parse(localStorage.getItem('currentAppUserId'))
    if(current_user_accesToken == null){
      this.loggedIn = false 
      return Promise.resolve(false)
    } else {
      return this.http
             .get(userUrl + curent_user_userId + '?access_token=' + current_user_accesToken)
             .toPromise()
             .then( (response)=>{
               return response.ok
             })
             .catch(this.handleErrorPromise)
    }
  }*/

  isAuthenticated(): Observable<boolean>{
    let current_user_accesToken = JSON.parse(localStorage.getItem('currentAppUser'))
    let curent_user_userId = JSON.parse(localStorage.getItem('currentAppUserId'))
    return this.http
             .get(userUrl + curent_user_userId + '?access_token=' + current_user_accesToken)
             .map( (response: Response) => {
               return response.ok
             })
  }


  private handleErrorPromise(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(false);
  }

  handleError(error: Response) {    
    return Observable.throw(error.json());
  }

}
