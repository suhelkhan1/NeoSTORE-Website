import { Component, OnInit } from '@angular/core';

import { ProductService } from '../core/services/product/product.service'
import { IProduct } from '../core/models/product.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private productService: ProductService,

  ) { }

  products: IProduct

  ngOnInit() {
    this.getPopularProducts()
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
