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
    return this.http.get(this.url).map( (response: Response) => {
      return <IProduct>response.json()
    } )
  }

  getProduct(productId): Observable<IProduct>{
    return this.http.get(this.url + '/' + productId ).map((response: Response)=>{
      return <IProduct>response.json()
    })
  }

}
