import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../core/services/user/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup
  name: FormControl
  email: FormControl
  mobile: FormControl
  subject: FormControl
  message: FormControl


  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.contactFormValidation()
  }

  contactFormValidation(){
    this.name = new FormControl('',[
      Validators.required
    ])
    this.email = new FormControl('',[
      Validators.required,
      Validators.email
    ])
    this.mobile = new FormControl('',[
      Validators.required
    ])
    this.subject = new FormControl('',[
      Validators.required
    ])
    this.message = new FormControl('',[
      Validators.required
    ])
    this.contactForm = new FormGroup({
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      subject: this.subject,
      message: this.message
    })
  }

  contact(formValues){
    console.log(formValues)
    this.userService.contactUs(formValues).subscribe(_=>_)
  }

}
