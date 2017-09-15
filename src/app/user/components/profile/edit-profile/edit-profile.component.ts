import { Component, OnInit, Input } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { UserService } from '../../../../core/services/user/user.service'
import { IUser } from '../../../../core/models/user.model' 

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  @Input() user: IUser

  editProfileForm: FormGroup
  firstName: FormControl
  lastName: FormControl
  gender: FormControl
  dateOfBirth: FormControl
  mobile: FormControl
  email: FormControl

  ngOnInit() {
    this.editProfileFormValidation()
    this.getCurrentUser()
  }

  editProfileFormValidation (){
    this.firstName = new FormControl('', [
      Validators.required
    ])
    this.lastName = new FormControl('', [
      Validators.required
    ])
    this.gender = new FormControl('', [
      Validators.required
    ])
    this.dateOfBirth = new FormControl('', [
      Validators.required
    ])
    this.mobile = new FormControl('', [
      Validators.required
    ])
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ])

    this.editProfileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      dateOfBirth: this.dateOfBirth,
      mobile: this.mobile,
      email: this.email,
    })
  }
  getCurrentUser(){
    this.userService.getUserDetails().subscribe(
      (response: IUser) => {
        this.user = response
        this.polpulateEditProfileForm(this.user)
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

  //Populate the Profile form with Profile of user
  polpulateEditProfileForm(user: IUser){
    if (this.editProfileForm) {
        this.editProfileForm.reset();
    }
    //this.user = user
    this.editProfileForm.patchValue({
      firstName: this.user.first_name,
      lastName: this.user.last_name,
      gender: this.user.gender,
      dateOfBirth: new Date(this.user.birth_date).toISOString().split('T')[0],
      mobile: this.user.phone_no,
      email: this.user.email,
    })
  }

  editProfile(formValues){
    console.log(formValues)
    let userInfo = {
      first_name: formValues.firstName,
      last_name: formValues.lastName,
      gender: formValues.gender,
      email: formValues.email,
      phone_no: formValues.mobile,
      birth_date: formValues.dateOfBirth,
    }
    this.userService.updateUser(userInfo).subscribe(
      (response: IUser) => {
        this.router.navigate(['/user/profile'])
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

  uploadImage(event){
    console.log(event.target.files[0])
    let userInfo = {
      id: this.user.id,
      file: event.target.files[0]
    }
    this.userService.uploadImage(userInfo).subscribe(
      response => response
    )
  }




}


