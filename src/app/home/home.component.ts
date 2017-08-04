import { Component, OnInit } from '@angular/core';

import { ProductService } from '../core/services/product/product.service'
import { IProduct } from '../core/models/product.model'

import { ProductCategoryService } from '../core/services/product-category/product-category.service'
import { IProductCategory } from '../core/models/product-category.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private productCategoryService: ProductCategoryService, 
  ) { }

  products: IProduct
  productCategories: IProductCategory

  ngOnInit() {
    this.getPopularProducts()
    this.getProductCategories()
  }

  getProductCategories() {
    this.productCategoryService.getProductCategories().subscribe(
      (response) => {
        this.productCategories = response
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

  getPopularProducts() {
    this.productService.getPopularProducts().subscribe(
      (response: IProduct) => {
        this.products = response
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

}
