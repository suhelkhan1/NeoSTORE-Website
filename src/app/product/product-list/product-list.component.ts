//Angular Core utilities
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

//Angular Animation utilities
import { trigger, state, style, animate, keyframes, transition, query, stagger } from '@angular/animations';

//Product services for sorting and  geting products
import { ProductService } from '../../core/services/product/product.service'
import { ProductSortService } from '../../core/services/product-sort/product-sort.service'
import { IProduct } from '../../core/models/product.model'

//Cart Service for localstorage i.e whithout logged in users
import { CartService } from '../../core/services/cart/cart.service'

//Cart service for logged in users
import { CartServerService } from '../../core/services/cart-server/cart-server.service'

//Service for user authentication 
import { AuthServiceLocal } from '../../core/services/auth/auth.service';

//3rd party imports
import { TabsetComponent } from 'ngx-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('100ms', [
          animate('0.3s ease-in', keyframes([
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
    private cartService: CartService,
    private cartServerService: CartServerService,
    private authServiceLocal: AuthServiceLocal,
    private toastr: ToastsManager
  ) {
    this.productArray
  }

  products: any
  ratings: any
  cart = []
  categoryTitle: string = 'All Categories'
  categoryId: string 
  productArray: any[] = []
  skip: number = 0
  isAuthenticated: boolean = false
  currentUser = JSON.parse(localStorage.getItem('currentAppUserId'))

  ngOnInit() {
    this.getProducts(this.skip)
    if(this.currentUser !== null){
      this.authServiceLocal.isAuthenticated().subscribe(
      response => this.isAuthenticated = response
      )
    }
  }


  lazyLoadingProducts(){
    this.skip = this.skip + 6
    if(this.skip <= 0 ){
      //event.target.classList.add('')
      false
    } else {
      this.getProducts(this.skip)
    }
  }

  getProducts(skip){
    this.productService.getProducts(skip).subscribe(
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
    this.productArray = event.products
    this.categoryTitle = event.title
    this.categoryId = event.id
  }

  getProductsByColor(event){
    this.productArray = event
  }

  sortByPopularProducts(){
    if(this.categoryId === undefined){
      this.getPopularProducts()
    } else {
      this.getPopularProductsWithCategory()
    }
  }

  sortByHighPrice(){
    if(this.categoryId === undefined){
      this.getPriceHighToLowProducts()
    } else {
      this.getPriceHighToLowProductsWithCategory()
    }
  }

  sortByLowPrice(){
    if(this.categoryId === undefined){
      this.getPriceLowToHighProducts()
    } else {
      this.getPriceLowToHighProductsWithCategory()
    }
  }

  getPopularProducts(){
    this.productSortService.getPopularProducts().subscribe(
      (response: IProduct) => {
        this.products = response
        this.productArray = this.products
      },
      (error : Error) => {
        return error
      }
    )
  }

  getPopularProductsWithCategory(){
    this.productSortService.getPopularProductsWithCategory(this.categoryId).subscribe(
      (response: IProduct) => {
        this.products = response
        this.productArray = this.products
      },
      (error : Error) => {
        return error
      }
    )
  }

  getPriceHighToLowProducts(){
    this.productSortService.getPriceHighToLowProducts().subscribe(
      (resposne) => {
        this.products = resposne
        this.productArray = this.products
      },
      (error : Error) => {
        return error
      }
    )
  }

  getPriceHighToLowProductsWithCategory(){
    this.productSortService.getPriceHighToLowProductsWithCategory(this.categoryId).subscribe(
      (resposne) => {
        this.products = resposne
        this.productArray = this.products
      },
      (error : Error) => {
        return error
      }
    )
  }

  getPriceLowToHighProducts(){
    this.productSortService.getPriceLowToHighProducts().subscribe(
      (resposne) => {
        this.products = resposne
        this.productArray = this.products
      },
      (error : Error) => {
        return error
      }
    )
  }

  getPriceLowToHighProductsWithCategory(){
    this.productSortService.getPriceLowToHighProductsWithCategory(this.categoryId).subscribe(
      (resposne) => {
        this.products = resposne
        this.productArray = this.products
      },
      (error : Error) => {
        return error
      }
    )
  }


  addToCart(product){

    let cart = {
      userid: JSON.parse(localStorage.getItem('currentAppUserId')),
      products:[{
          productId: product.id,
          qty: 1  
      }]
    }
    console.log('Cart items', cart)
    if(this.isAuthenticated){
      this.cartServerService.addToCartServer(cart).subscribe(
        response => {
          this.toastr.custom('Added to cart')
          return response
        }
      )
    } else {
      this.cartService.addToCart(product)
      this.toastr.custom('Added to cart')
    }
  }
}
