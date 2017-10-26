import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'

import { IProduct } from '../../models/product.model'
import { productUrl } from '../../apiUrls';

@Injectable()
export class ProductSearchService {

  constructor(
    private http: Http
  ) { }


  getProducts(): Observable<any>{
    return this.http.get(productUrl).map( (response: Response) => {
      return <any>response.json()
    } ).catch(this.handleError)
  }

  handleError(error: Response) { 
    return Observable.throw(error.json());
  }

}
