import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'

import { IProductCategory } from '../../models/product-category.model'

@Injectable()
export class ProductCategoryService {

  constructor(
    private http: Http
  ) { }

  url = 'http://10.0.100.213:3000/api/categories'
  
  //Get categories with images 
  getProductCategories(): Observable<IProductCategory>{
    return this.http.get(this.url + '?filter={"include":"images"}' ).map( (response:Response) => {
      return <IProductCategory>response.json()
    }).catch(this.handleError)
  }

  //Get categories without images
  getProductCategoriesOnly(): Observable<IProductCategory>{
    return this.http.get(this.url ).map( (response:Response) => {
      return <IProductCategory>response.json()
    }).catch(this.handleError)
  }

   handleError(error: Response) { 
    return Observable.throw(error.json());
  }

}
