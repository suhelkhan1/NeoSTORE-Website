import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CheckoutService {

  constructor() { }

  private data = {}

  getData(){
    return this.data
  }

  addCart(data){
    this.data['cart'] = data
    console.log(this.data)
  }

  addAddress(data){
    this.data['address'] = data
    console.log(this.data)
  }
}
