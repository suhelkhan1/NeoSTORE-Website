import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http'

import { IProduct } from '../../models/product.model';

@Injectable()
export class CartService {


  constructor(
    private http: Http
  ) {
    if(!localStorage.getItem('cartItems')){
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    }
  }
  cartItems=[]


  addToCart(product): any{
    var present=false;
    var checkCart=JSON.parse(localStorage.getItem('cartItems'))
    
    for(var i=0;i<checkCart.length;i++){
      if(checkCart[i].id==product.id){
        present=true;
        break
        }
    }
    if(!present){
      console.log('Product inserted:', product.product_name)
      this.cartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    }
    
    //console.log('Product inserted:', product.product_name)
    return this.cartItems
  }

  getCartItems(): any {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'))
    return this.cartItems
  }

  deleteCartItem(index): any{
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'))
    this.cartItems.splice(index,1)
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'))
    return this.cartItems
  }


  addToCartApi(product){
    console.log("our data->"+product);
    //return this.http.post(this.url,)
  }

}
