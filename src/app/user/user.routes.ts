import { UserComponent } from './user.component'
import { ProfileComponent } from './components/profile/profile.component'
import { AddressesComponent } from './components/addresses/addresses.component'
import { OrdersComponent } from './components/orders/orders.component'


export const UserRoutes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'profile'},
      { path: 'profile', component: ProfileComponent},
      { path: 'orders', component: OrdersComponent },
      { path: 'addresses', component: AddressesComponent }
    ]
  },
]; 