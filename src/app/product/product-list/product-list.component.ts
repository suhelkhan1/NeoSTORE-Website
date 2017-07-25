import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../core/services/product/product.service'
import { IProduct } from '../../core/models/product.model'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  products: any
  ratings: any

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (response: IProduct) => {
        this.products = response
        this.ratings = response.product_avg_rating
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

}
