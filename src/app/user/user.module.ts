import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'


import { UserComponent } from './user.component';
import { UserRoutes as routes } from './user.routes';
import { AddressesComponent } from './components/addresses/addresses.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponent } from './components/profile/profile.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UserComponent,
    AddressesComponent,
    OrdersComponent,
    ProfileComponent
  ]
})
export class UserModule { }
