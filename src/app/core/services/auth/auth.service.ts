import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs'
import { IUserLoginResponse } from '../../models/user-login.model'
import { IUser } from '../../models/user.model'

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) { }

  url = 'http://10.0.100.213:3000/api/user_accounts/';
  loggedIn: boolean = false
  accessToken: string

  login(loginCrendentials): Observable<IUserLoginResponse>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url + 'login', JSON.stringify(loginCrendentials), options).map((response: Response) => {
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

  register(userInfo){   
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url, JSON.stringify(userInfo), options).map( (response: Response) => {
      return <IUser>response.json()
    }).catch(this.handleError)
  }

  logout() {
    this.accessToken = JSON.parse(localStorage.getItem('currentAppUser'))
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url + 'logout?access_token=' + this.accessToken, options).map( (response: Response)=>{
      // remove user from local storage to log user out
      localStorage.removeItem('currentAppUser');
      localStorage.removeItem('currentAppUserId');
      return response.json()
    }).catch(this.handleError)
  }

   resetPassword(email): Observable<string>{   
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url +'reset', JSON.stringify(email), options).map( (response: Response) => {
      return <string>response.json()
    }).catch(this.handleError)
  }

  setPassword(setInfo): Observable<string>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let password = {
      newPassword: setInfo.password
    }
    return this.http.post(this.url +'reset-password'+'?access_token='+ setInfo.token , JSON.stringify(password), options).map( (response: Response) => {
      return <string>response.json()
    }).catch(this.handleError)
  }

  ifLoggedIn(){
    return this.loggedIn
  }

  handleError(error: Response) {    
    return Observable.throw(error.json());
  }

}
