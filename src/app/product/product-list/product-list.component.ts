import { Component, OnInit, Input } from '@angular/core';

import { ProductService } from '../../core/services/product/product.service'
import { ProductSortService } from '../../core/services/product-sort/product-sort.service'
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
    private productSortService: ProductSortService,
    private cartService: CartService
  ) { }

  products: IProduct
  ratings: any
  cart = []
  title: string = 'All Categories'

  //tabs active management variables
  private ratingEvent
  private priceUpEvent
  private priceDownEvent

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

  getProductByCategory(event){
    this.products = event.products
    this.title = event.title
  }

  getProductsByColor(event){
    this.products = event
  }


  sortByPopularProducts(event){
    this.ratingEvent = event
    //adding active class on click
    this.ratingEvent.target.classList.add('active')
    //removing active classes
    if(this.priceDownEvent){
      this.priceDownEvent.target.classList.remove('active')
    }
    if(this.priceDownEvent) {
      this.priceUpEvent.target.classList.remove('active')
    }
    //geting product from data base
    this.productSortService.getPopularProducts().subscribe(
      (response: IProduct) => {
        this.products = response
      },
      (error : Error) => {
        return error
      }
    )
  }

  sortByHighPrice(event){
    this.priceUpEvent = event
    //adding active class on click
    this.priceUpEvent.target.classList.add('active')
    //removing active classes
    if(this.priceDownEvent){
      this.priceDownEvent.target.classList.remove('active')
    }
    if(this.ratingEvent){
      this.ratingEvent.target.classList.remove('active')
    }
    //geting product from data base
    this.productSortService.getPriceHighToLowProducts().subscribe(
      (response: IProduct) => {
        this.products = response
      },
      (error : Error) => {
        return error
      }
    )
  }

  sortByLowPrice(event){
    this.priceDownEvent = event
    //adding active class on click
    this.priceDownEvent.target.classList.add('active')
    //removing active classes
    if(this.ratingEvent){
      this.ratingEvent.target.classList.remove('active')
    }
    if(this.priceUpEvent){
      this.priceUpEvent.target.classList.remove('active')
    }
    //geting product from data base
    this.productSortService.getPriceLowToHighProducts().subscribe(
      (response: IProduct) => {
        this.products = response
      },
      (error : Error) => {
        return error
      }
    )
  }

  addToCart(product){
   this.cartService.addToCart(product)
    //this.cartService.addToCartApi(product)
  }
}
