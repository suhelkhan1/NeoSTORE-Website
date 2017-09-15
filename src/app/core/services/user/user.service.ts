import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { IUser } from '../../models/user.model'
import { userUrl, imageUrl } from '../../apiUrls';


@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }
  current_user_accesToken = JSON.parse(localStorage.getItem('currentAppUser'))
  curent_user_userId = JSON.parse(localStorage.getItem('currentAppUserId'))

  getUserDetails(): Observable<IUser>{
    return this.http.get( userUrl + this.curent_user_userId + '?access_token=' + this.current_user_accesToken + '&filter={"include":"images"}').map((response: Response) => {
      return <IUser>response.json()
    }).catch(this.handleError)
  }

  //Update existing user details
  updateUser(userInfo){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.patch(userUrl + this.curent_user_userId + '?access_token='+ this.current_user_accesToken, JSON.stringify(userInfo), options).map( (response: Response) => {
      return <IUser>response.json()
    }).catch(this.handleError)
  }

  uploadImage(userInfo){
    let formdata = new FormData()
    formdata.append('file', userInfo.file)
    formdata.append('userId', userInfo.id)
    return this.http.post(imageUrl, formdata).map( (response: Response) => {
      return response.json()
    }).catch(this.handleError)
  }
  
  handleError(error: Response) { 
    return Observable.throw(error.json());
  }
}
