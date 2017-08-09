import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, animate, keyframes, transition, query, stagger } from '@angular/animations';

import { ProductService } from '../../core/services/product/product.service'
import { ProductSortService } from '../../core/services/product-sort/product-sort.service'
import { CartService } from '../../core/services/cart/cart.service'
import { IProduct } from '../../core/models/product.model'

import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private productSortService: ProductSortService,
    private cartService: CartService
  ) {
    this.productArray
  }

  products: any
  ratings: any
  cart = []
  title: string = 'All Categories'
  productArray: any[] = []


  ngOnInit() {
    this.productService.getProducts().subscribe(
      (response: IProduct) => {
        this.products = response
        this.ratings = response.product_avg_rating
        for(let product of this.products){
          this.productArray.push(product)
        }
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


  sortByPopularProducts(){
    this.productSortService.getPopularProducts().subscribe(
      (response: IProduct) => {
        this.products = response
      },
      (error : Error) => {
        return error
      }
    )
  }

  sortByHighPrice(){
    this.productSortService.getPriceHighToLowProducts().subscribe(
      (response: IProduct) => {
        this.products = response
      },
      (error : Error) => {
        return error
      }
    )
  }

  sortByLowPrice(){
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
