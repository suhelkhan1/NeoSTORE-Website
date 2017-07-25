import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { ProductService} from '../../core/services/product/product.service'
import { IProduct } from '../../core/models/product.model'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  product: IProduct

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        let productId = params['id']
        this.getProduct(productId)
      }
    )
  }

  getProduct(productId){
    this.productService.getProduct(productId).subscribe(
      (response: IProduct) => {
        this.product = response
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

}
