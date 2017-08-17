import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { ProductService} from '../../core/services/product/product.service'
import { CartService } from '../../core/services/cart/cart.service'
import { IProduct } from '../../core/models/product.model'
import { AuthServiceLocal } from '../../core/services/auth/auth.service'




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {


  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService:CartService,
    private authServiceLocal: AuthServiceLocal
  ) { 
    this.isAuthenticated = this.authServiceLocal.isAuthenticated()

  }

  activeImage: any;
  product: IProduct;
  productImgArray: any;
  rating: any;
  isAuthenticated

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        let productId = params['id']
        this.getProduct(productId)
      }
    )
    this.isAuthenticated = this.authServiceLocal.isAuthenticated()
  }

  getProduct(productId){
    this.productService.getProduct(productId).subscribe(
      (response: IProduct) => {
        this.product = response;
        this.productImgArray=response.images;
        this.activeImage = this.productImgArray[0].ImgURL;
        this.rating=this.product.product_avg_rating;
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

  changeActiveImage(productimg) {
    this.activeImage = productimg.ImgURL;
  }

  addToCart(product){
    this.cartService.addToCart(product)
  }
}
