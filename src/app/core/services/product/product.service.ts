import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'

import { IProduct } from '../../models/product.model'
import { productUrl } from '../../apiUrls';

@Injectable()
export class ProductService {

  constructor(
    private http: Http
  ) { }

  getProducts(skip): Observable<IProduct>{
    return this.http.get(productUrl+ '?filter={"include":"images" ,"limit":"6", "skip":"'+ skip +'"}').map( (response: Response) => {
      return <IProduct>response.json()
    } ).catch(this.handleError)
  }

  getPopularProducts(): Observable<IProduct>{
    return this.http.get(productUrl+ '?filter={"order": "product_avg_rating  DESC","include":"images" ,"limit":"6", "skip":"0"}').map( (response: Response) => {
      return <IProduct>response.json()
    } ).catch(this.handleError)
  }

  getProduct(productId): Observable<IProduct>{
    return this.http.get(productUrl+ '/' + productId + '?filter={"include":"images"}' ).map((response: Response)=>{
      return <IProduct>response.json()
    }).catch(this.handleError)
  }

   handleError(error: Response) { 
    return Observable.throw(error.json());
  }

}
