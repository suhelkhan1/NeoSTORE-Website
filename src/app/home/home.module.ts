import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module'

import { HomeRoutes as routes } from './home.routes'

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileDropdownComponent } from './header/profile-dropdown/profile-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileDropdownComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class HomeModule { }
