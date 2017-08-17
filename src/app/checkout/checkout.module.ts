import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from  '@angular/router'

import { CheckoutComponent } from './checkout.component';
import {CartModule}from './cart/cart.module'

import {ProductRoutes as routes} from './checkout.routes';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component'

@NgModule({
  imports: [
    CommonModule,
    CartModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CheckoutComponent,
    AddressComponent,
    PaymentComponent
  ]
})
export class CheckoutModule { }
