import { PaymentComponent } from './payment/payment.component'
import { AddressComponent } from './address/address.component'

import { CartComponent } from './cart/cart.component'

import { AuthGuard } from '../core/guards/auth/auth.guard'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';


const CheckoutRoutes: Routes =[
  {
    path: '',
    component: CheckoutComponent,
    children: [
      { path: '', redirectTo: 'cart', pathMatch: 'prefix' }, 
      { path:'cart', component: CartComponent },
      { path:'address', component: AddressComponent, canActivate: [AuthGuard] },
      { path:'payment', component: PaymentComponent, canActivate: [AuthGuard] }
    ]
  },
  
];


@NgModule({
  imports: [
    RouterModule.forChild(CheckoutRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CheckoutRoutingModule {}