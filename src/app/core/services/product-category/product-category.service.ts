import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'

import { IProductCategory } from '../../models/product-category.model'
import { categoryUrl } from '../../apiUrls';

@Injectable()
export class ProductCategoryService {

  constructor(
    private http: Http
  ) { }

  
  //Get categories with images 
  getProductCategories(): Observable<IProductCategory>{
    return this.http.get(categoryUrl + '?filter={"include":"images"}' ).map( (response:Response) => {
      return <IProductCategory>response.json()
    }).catch(this.handleError)
  }

  //Get categories without images
  getProductCategoriesOnly(): Observable<IProductCategory>{
    return this.http.get(categoryUrl ).map( (response:Response) => {
      return <IProductCategory>response.json()
    }).catch(this.handleError)
  }

   handleError(error: Response) { 
    return Observable.throw(error.json());
  }

}
