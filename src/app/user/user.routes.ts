import { UserComponent } from './user.component'
import { ProfileComponent } from './components/profile/profile.component'
import { AddressesComponent } from './components/address/addresses/addresses.component'
import { OrdersComponent } from './components/orders/orders.component'
import { AddAddressComponent } from './components/address/add-address/add-address.component'
import { EditAddressComponent } from './components/address/edit-address/edit-address.component'
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component'


export const UserRoutes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'profile'},
      { path: 'profile', component: ProfileComponent},
      { path: 'orders', component: OrdersComponent },
      { path: 'addresses', component: AddressesComponent },
      { path: 'add/address', component: AddAddressComponent},
      { path: 'edit/address/:id', component: EditAddressComponent},
      { path: 'edit/profile', component: EditProfileComponent}
    ]
  },
]; 