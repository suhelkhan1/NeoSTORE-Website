import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { orderUrl } from '../../apiUrls';

@Injectable()
export class OrderService {

  userId = JSON.parse(localStorage.getItem('currentAppUserId'))
  accesToken = JSON.parse(localStorage.getItem('currentAppUser'))
  constructor(
    private http: Http
  ) { }

  getOrders(): Observable<any>{

    return this.http.get(orderUrl + 'allorderofuser/' + this.userId).map((response: Response) =>{
      return <any>response.json()
    }).catch(this.handleError)
  }

  handleError(error: Response) {
    return Observable.throw(error.json());
  }

}
