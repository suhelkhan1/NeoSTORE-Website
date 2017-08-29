import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module'

import { HomeRoutingModule } from './home.routes'

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileDropdownComponent } from './header/profile-dropdown/profile-dropdown.component';
import { CheckoutFooterComponent } from './checkout-footer/checkout-footer.component';
import { CheckoutHeaderComponent } from './checkout-header/checkout-header.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileDropdownComponent,
    CheckoutFooterComponent,
    CheckoutHeaderComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CheckoutFooterComponent,
    CheckoutHeaderComponent
  ]
})
export class HomeModule { }
