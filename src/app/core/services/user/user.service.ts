import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { IUser } from '../../models/user.model'


@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }
  url = 'http://10.0.100.213:3000/api/user_accounts'
  current_user_accesToken = JSON.parse(localStorage.getItem('currentAppUser'))
  curent_user_userId = JSON.parse(localStorage.getItem('currentAppUserId'))

  getUserDetails(): Observable<IUser>{
    return this.http.get( this.url + '/' + this.curent_user_userId + '?access_token=' + this.current_user_accesToken).map((response: Response) => {
      return <IUser>response.json()
    }).catch(this.handleError)
  }

  //Update existing user details
  updateUser(userInfo){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.patch(this.url +'/'+ this.curent_user_userId + '?access_token='+ this.current_user_accesToken, JSON.stringify(userInfo), options).map( (response: Response) => {
      return <IUser>response.json()
    }).catch(this.handleError)
  }

  /*getOptions(){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
  }*/
  
  handleError(error: Response) { 
    return Observable.throw(error.json());
  }
}
