import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

//Auth service for user login
import { AuthService } from '../../core/services/auth/auth.service'
//User login response model for strong typings
import { IUserLoginResponse } from '../../core/models/user-login.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  loginForm: FormGroup
  private email: FormControl
  private password: FormControl

  ngOnInit() {
    this.email = new FormControl('test@test.com',[
      Validators.required,
      Validators.email
    ])
    this.password = new FormControl('', [
      Validators.required
    ])
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    })
  }

  login(formValues){
    console.log(formValues)
    this.authService.login(formValues).subscribe(
      (response: IUserLoginResponse) => {
        this.router.navigate(['/home'])
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

}
