import {CartComponent} from './cart/cart.component'

export const ProductRoutes =[
  { path:'cart', component: CartComponent },
  { path:'', redirectTo: 'cart', pathMatch:'full' }

];
