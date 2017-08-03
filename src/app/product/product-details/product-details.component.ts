import {Component, OnInit, ElementRef} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { ProductService} from '../../core/services/product/product.service'
import { CartService } from '../../core/services/cart/cart.service'
import { IProduct } from '../../core/models/product.model'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private elementRef: ElementRef,
    private cartService:CartService
  ) { }

  activeImage: any;
  product: IProduct;
  productImgArray: any;
  rating: any;

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
        this.product = response;
        this.productImgArray=response.images;
        console.log(this.product);
        this.activeImage = this.productImgArray[0].ImgURL;
        this.rating=this.product.product_avg_rating;
        console.log("-->"+this.rating);
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

  changeActiveImage(productimg) {
    console.log('productimg', productimg);
    this.activeImage = productimg.ImgURL;
  }

  addToCart(product){
    this.cartService.addToCart(product)
  }

}
