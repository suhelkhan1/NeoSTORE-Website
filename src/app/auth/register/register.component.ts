import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

//Auth service for user login
import { AuthServiceLocal } from '../../core/services/auth/auth.service'
//User model for strong typings
import { IUser } from '../../core/models/user.model'
//Equal validator for confirm password
//import { EqualValidatorDirective } from '../../core/directives/equal-validator.directive' 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authServiceLocal: AuthServiceLocal,
    private router: Router
  ) { }

  registerForm: FormGroup
  private email: FormControl
  private password: FormControl
  private confirmPassword: FormControl
  private phoneNumber: FormControl
  private gender: FormControl

  ngOnInit() {
    this.registerFormValidation()
  }

  registerFormValidation(){
    this.email = new FormControl('test@gmail.com', [
      Validators.required,
      Validators.email
    ])
    this.password = new FormControl('', [
      Validators.required
    ])
    this.confirmPassword = new FormControl('', [
      Validators.required
    ])
    this.phoneNumber = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ])
    this.gender = new FormControl('', [
      Validators.required
    ])

    this.registerForm = new FormGroup({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      phoneNumber: this.phoneNumber,
      gender: this.gender
    })
  }

  register(formValues){
    console.log(formValues)
    let userInfo = {
      first_name: '',
      last_name: '',
      gender: formValues.gender,
      email: formValues.email,
      password: formValues.password,
      phone_no: formValues.phoneNumber,
      username: '',
      role: 'AppUser',
      orderId: '',
      shoppingcartId: '',
      is_active: true,
      birth_of_date: 0
    }
    this.authServiceLocal.register(userInfo).subscribe(
      (response: IUser) => {
        this.router.navigate(['/auth/login'])
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

}
