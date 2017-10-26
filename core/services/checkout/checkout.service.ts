import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { orderUrl } from '../../apiUrls';

@Injectable()
export class CheckoutService {

  constructor(
    private http: Http
  ) { }

  private data = {}
  userId = JSON.parse(localStorage.getItem('currentAppUserId'))
  accesToken = JSON.parse(localStorage.getItem('currentAppUser'))

  getData(){
    return this.data
  }

  addCart(data){
    this.data['cart'] = data
    console.log(this.data)
  }

  addAddress(data){
    this.data['address'] = data
    console.log(this.data)
  }

  payment(card): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let info = {
       userId: this.userId,
       addressId: this.data['address'][0].id,
       email: 'test@test.com',
       card: {
         exp_month: card.expiryMonth,
         exp_year: card.expiryYear,
         number: card.cardNumber,
         cvc: card.cvc
       },
       products: this.data['cart']
    }

    console.log('Aniket', info);

    return this.http
               .post(orderUrl + 'order?' + this.accesToken , JSON.stringify(info), options)
               .map( (response: Response) => {
                  return <any>response.json()
                }).catch(this.handleError)
  }

  handleError(error: Response) {
    return Observable.throw(error.json());
  }
}
