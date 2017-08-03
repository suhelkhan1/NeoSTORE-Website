import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'


import { UserComponent } from './user.component';
import { UserRoutes as routes } from './user.routes';
import { AddressesComponent } from './components/address/addresses/addresses.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddAddressComponent } from './components/address/add-address/add-address.component';
import { EditAddressComponent } from './components/address/edit-address/edit-address.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    UserComponent,
    AddressesComponent,
    OrdersComponent,
    ProfileComponent,
    AddAddressComponent,
    EditAddressComponent
  ]
})
export class UserModule { }
