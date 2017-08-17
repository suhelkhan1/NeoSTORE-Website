import { PaymentComponent } from './payment/payment.component'
import { AddressComponent } from './address/address.component'

import { CartComponent } from './cart/cart.component'

import { AuthGuard } from '../core/guards/auth/auth.guard'

export const ProductRoutes =[
  { path:'cart', component: CartComponent },
  { path:'address', component: AddressComponent, canActivate: [AuthGuard] },
  { path:'payment', component: PaymentComponent, canActivate: [AuthGuard] }
];
