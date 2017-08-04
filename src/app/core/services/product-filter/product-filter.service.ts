import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'

import { IProductCategory } from '../../models/product-category.model'

@Injectable()
export class ProductFilterService {

  constructor(
    private http: Http
  ) { }

  url = 'http://10.0.100.213:3000/api/products'
  
  //Get products by category id
  getProductCategories(categoryId): Observable<IProductCategory>{
    return this.http.get(this.url + '?filter={"where":{"categoryId":"'+categoryId+'"},"include":"images"}' ).map( (response:Response) => {
      return <IProductCategory>response.json()
    }).catch(this.handleError)
  }


   handleError(error: Response) { 
    return Observable.throw(error.json());
  }

}
