import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'

import { IProduct } from '../../models/product.model'

@Injectable()
export class ProductSearchService {

  constructor(
    private http: Http
  ) { }

  url = 'http://10.0.100.213:3000/api/products'

  getProducts(): Observable<any>{
    return this.http.get(this.url).map( (response: Response) => {
      return <any>response.json()
    } ).catch(this.handleError)
  }

  handleError(error: Response) { 
    return Observable.throw(error.json());
  }

}
