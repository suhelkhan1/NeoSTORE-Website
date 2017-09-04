import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs'

import { ICart } from '../../models/cart.model';
import { cartUrl } from '../../apiUrls';


@Injectable()
export class CartServerService {


  constructor(
    private http: Http
  ) {
  }

  getCartServer(userId): Observable<any>{
    return this.http.get(cartUrl + 'getCart?userid=' + userId).map((response: Response) => {
      return <any>response.json();
    }).catch(this.handleError)
  }

  addToCartServer(cartItems): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(cartUrl + 'addToCart', JSON.stringify(cartItems), options).map((response: Response) => {
      return <any>response.json();
    }).catch(this.handleError)
  }


  cartLength(userId){
    return fetch(cartUrl + 'cartcount/'+ userId)
              .then((response) => {
                return response.json();
              })
  }

  handleError(error: Response) {    
    return Observable.throw(error.json());
  }
}
