import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'

import { IProductCategory } from '../../models/product-category.model'
import { IColor } from '../../models/color.model'
import { productUrl } from '../../apiUrls';

@Injectable()
export class ProductFilterService {

  constructor(
    private http: Http
  ) { }

  
  //Get products by category id
  getProductCategories(categoryId): Observable<IProductCategory>{
    return this.http.get(productUrl + '?filter={"where":{"categoryId":"'+categoryId+'"},"include":"images"}' ).map( (response:Response) => {
      return <IProductCategory>response.json()
    }).catch(this.handleError)
  }

  //Get products by colors
  getProductsByColor(colorName): Observable<IColor> {
    return this.http.get(productUrl + '?filter={"where":{"product_color.color_name":{"like":"'+ colorName +'","options":"i"}}, "include":"images"}' ).map( (response:Response) => {
    return <IProductCategory>response.json()
    }).catch(this.handleError)
  }

  handleError(error: Response) { 
    return Observable.throw(error.json());
  }

}
