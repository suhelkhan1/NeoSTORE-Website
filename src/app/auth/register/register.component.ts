import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  registerForm: FormGroup
  private email: FormControl
  private password: FormControl
  private confirmPassword: FormControl
  private phoneNumber: FormControl
  private gender: FormControl

  ngOnInit() {

    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ])
    this.password = new FormControl('', [
      Validators.required,
      Validators.pattern('')
    ])
    this.confirmPassword = new FormControl('', [
      Validators.required,
      Validators.pattern('')
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

}
