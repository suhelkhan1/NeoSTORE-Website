import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'

import { IProduct } from '../../models/product.model'

@Injectable()
export class ProductService {

  constructor(
    private http: Http
  ) { }

  url: string = 'http://10.0.100.213:3000/api/products'

  getProducts(): Observable<IProduct>{
    return this.http.get(this.url + '?filter[include]=images').map( (response: Response) => {
      return <IProduct>response.json()
    } )
  }

  getPopularProducts(): Observable<IProduct>{
    return this.http.get(this.url + '?filter[include]=images&{"limit":"6","skip":"0"}' ).map( (response: Response) => {
      return <IProduct>response.json()
    } )
  }

  getProduct(productId): Observable<IProduct>{
    return this.http.get(this.url + '/' + productId + '?filter[include]=images' ).map((response: Response)=>{
      return <IProduct>response.json()
    })
  }

}
