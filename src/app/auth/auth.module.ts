/*+-+-+-+-+-+-+-+-+-+-+-+- Angular Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule,FormsModule } from '@angular/forms'

/*+-+-+-+-+-+-+-+-+-+-+-+- 3rd Party Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { Angular2SocialLoginModule } from "angular2-social-login";//Angular2 social login

/*+-+-+-+-+-+-+-+-+-+-+-+- Shared Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { SharedModule } from '../shared/shared.module'

/*+-+-+-+-+-+-+-+-+-+-+-+- Auth Components +-+-+-+-+-+-+-+-+-+-+-+-*/
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

/*+-+-+-+-+-+-+-+-+-+-+-+- Auth Routes +-+-+-+-+-+-+-+-+-+-+-+-*/
import { AuthRoutes as routes} from './auth.routes'

/*+-+-+-+-+-+-+-+-+-+-+-+- Social Login Providers +-+-+-+-+-+-+-+-+-+-+-+-*/
let providers = {
    "google": {
      "clientId": "517627180134-e331pjladj632q97cg35l3irjr2dnrnh.apps.googleusercontent.com"
    },
    "facebook": {
      "clientId": "1977563699187803",
      "apiVersion": "v2.4" //like v2.4 
    }
  };

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    Angular2SocialLoginModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }

//Loading the providers for social login
Angular2SocialLoginModule.loadProvidersScripts(providers);