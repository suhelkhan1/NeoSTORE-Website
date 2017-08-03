import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { IUser } from '../../models/user.model'


@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }
  url = 'http://10.0.100.213:3000/api/addresses'
  current_user_accesToken: string
  curent_user_userId: string

  getUserDetails(): Observable<IUser>{
    this.current_user_accesToken = JSON.parse(localStorage.getItem('currentAppUser'))
    this.curent_user_userId = JSON.parse(localStorage.getItem('currentAppUserId'))
    return this.http.get( this.url + '/' + this.curent_user_userId + '?access_token=' + this.current_user_accesToken).map((response: Response) => {
      return <IUser>response.json()
    }).catch(this.handleError)
  }
  
  handleError(error: Response) { 
    return Observable.throw(error.json());
  }
}
