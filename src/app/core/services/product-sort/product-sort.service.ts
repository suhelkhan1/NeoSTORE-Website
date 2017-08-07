import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'

import { IProduct } from '../../models/product.model'

@Injectable()
export class ProductSortService {

  constructor(
    private http: Http
  ) { }

  url = 'http://10.0.100.213:3000/api/products'
  


  //Sort Products by average ratings
  getPopularProducts(): Observable<IProduct>{
    return this.http.get(this.url + '?filter={"order": "product_avg_rating  DESC", "include":"images"}' ).map( (response:Response) => {
      return <IProduct>response.json()
    }).catch(this.handleError)
  }

  //Sort Products by price high to low
  getPriceHighToLowProducts(): Observable<IProduct>{
    return this.http.get(this.url + '?filter={"order": "product_cost  DESC", "include":"images"}' ).map( (response:Response) => {
      return <IProduct>response.json()
    }).catch(this.handleError)
  }

  //Sort Products by price low to high
  getPriceLowToHighProducts(): Observable<IProduct>{
    return this.http.get(this.url + '?filter={"order": "product_cost  ASC", "include":"images"}' ).map( (response:Response) => {
      return <IProduct>response.json()
    }).catch(this.handleError)
  }

  handleError(error: Response) { 
    return Observable.throw(error.json());
  }


}
