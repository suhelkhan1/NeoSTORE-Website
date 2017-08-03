import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { AddressService } from '../../../../core/services/user/address/address.service'
import { IAddress } from '../../../../core/models/address.model'

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  constructor(
    private router: Router,
    private addressService: AddressService
  ) { }

  addAddressForm: FormGroup
  private fulladdress: FormControl
  private pincode: FormControl
  private city: FormControl
  private state: FormControl
  private country: FormControl

  ngOnInit() {
    this.addAddressFormValidation()
  }

  addAddressFormValidation(){
    this.fulladdress = new FormControl('',[
      Validators.required,
      Validators.minLength(1)
    ])
    this.pincode = new FormControl('',[
      Validators.required
    ])
    this.city = new FormControl('',[
      Validators.required
    ])
    this.state = new FormControl('',[
      Validators.required
    ])
    this.country = new FormControl('',[
      Validators.required
    ])

    this.addAddressForm = new FormGroup({
      fulladdress: this.fulladdress,
      pincode: this.pincode,
      city: this.city,
      state: this.state,
      country: this.country
    })
  }

  addAddress(formValues) {
    console.log(formValues)
    this.addressService.addAddress(formValues).subscribe(
      (response: IAddress) => {
        this.router.navigate(['/user/addresses'])
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

}
