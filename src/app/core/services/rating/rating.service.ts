import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { IRating } from '../../models/rating.model'
import { ratingUrl } from '../../apiUrls';

@Injectable()
export class RatingService {

  constructor(
    private http: Http
  ) { }

  current_user_accesToken = JSON.parse(localStorage.getItem('currentAppUser'))
  curent_user_userId = JSON.parse(localStorage.getItem('currentAppUserId'))

  postrating(ratingData): Observable<IRating>{
    this.curent_user_userId = JSON.parse(localStorage.getItem('currentAppUserId'))
    this.current_user_accesToken = JSON.parse(localStorage.getItem('currentAppUser'))
     let headers = new Headers({ 'Content-Type': 'application/json'});
     let options = new RequestOptions({headers: headers});
  
    return this.http.post( ratingUrl + 'rateProduct?access_token=' + this.current_user_accesToken, JSON.stringify(ratingData), options).map((response: Response) => {
      return <IRating>response.json()
    }).catch(this.handleError)
  }


  handleError(error: Response) { 
    return Observable.throw(error.json());
  }
  

}
