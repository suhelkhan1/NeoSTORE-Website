import { Component, OnInit, Input } from '@angular/core';

import { ProductService } from '../../core/services/product/product.service'
import { CartService } from '../../core/services/cart/cart.service'
import { IProduct } from '../../core/models/product.model'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  products: IProduct
  ratings: any
  cart = []

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

  childPro(event){
    console.log('child data:', event)
    this.products = event
  }

  /*addToCart(product){
    this.cart.push(product)
    localStorage.setItem('cart', JSON.stringify(this.cart))
    console.log('Product inserted:', product.product_name)
  }*/

  addToCart(product){
   this.cartService.addToCart(product)
    //this.cartService.addToCartApi(product)
  }
}
