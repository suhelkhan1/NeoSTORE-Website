import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

export const AuthRoutes = [
  { path: '', redirectTo: 'resgister', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];