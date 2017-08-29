import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

export const AuthRoutes = [
  { path: '',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'prefix' }, 
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ] 
  },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(AuthRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AuthRoutingModule {}