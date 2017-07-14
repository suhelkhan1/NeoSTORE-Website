import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

//
import { SharedModule } from '../shared/shared.module'

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutes as routes} from './auth.routes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    LoginComponent, 
    RegisterComponent
  ]
})
export class AuthModule { }
