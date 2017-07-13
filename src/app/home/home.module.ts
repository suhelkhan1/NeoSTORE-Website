import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { HomeRoutes as routes } from './home.routes'

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class HomeModule { }
