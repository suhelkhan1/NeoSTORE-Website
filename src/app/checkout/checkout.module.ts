import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from  '@angular/router'

import { CheckoutComponent } from './checkout.component';
import {CartModule}from './cart/cart.module'

import {ProductRoutes as routes} from './checkout.routes'

@NgModule({
  imports: [
    CommonModule,
    CartModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckoutComponent]
})
export class CheckoutModule { }
