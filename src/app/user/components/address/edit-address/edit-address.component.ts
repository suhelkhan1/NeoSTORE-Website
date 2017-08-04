import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute, Params } from '@angular/router'

import { AddressService } from '../../../../core/services/user/address/address.service'
import { IAddress } from '../../../../core/models/address.model'

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  constructor(
    private router: Router,
    private addressService: AddressService,
    private activatedRoute:ActivatedRoute
  ) { }

  editAddressForm: FormGroup
  private fulladdress: FormControl
  private pincode: FormControl
  private city: FormControl
  private state: FormControl
  private country: FormControl

  address: IAddress

  ngOnInit() {
    this.editAddressFormValidation()

    this.activatedRoute.params.subscribe( (params: Params) => {
      let id = params['id'];
      this.getAddress(id)  
    })
  }

  editAddressFormValidation(){
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

    this.editAddressForm = new FormGroup({
      fulladdress: this.fulladdress,
      pincode: this.pincode,
      city: this.city,
      state: this.state,
      country: this.country
    })
  }

  //Get the single address which is to be edit
  getAddress(id){
    this.addressService.getAddressById(id).subscribe(
      (response: IAddress) => {
        this.polpulateEditAddressForm(response)
        this.address = response
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

  //Populate the address form with address of user
  polpulateEditAddressForm(address: IAddress){
    if (this.editAddressForm) {
        this.editAddressForm.reset();
    }
    this.address = address
    this.editAddressForm.patchValue({
      fulladdress: this.address.fulladdress,
      pincode: this.address.pincode,
      city: this.address.city,
      state: this.address.state,
      country: this.address.country
    })
  }


  //Send the edited address to server
  editAddress(formValues) {
    let address = {
      fulladdress: formValues.fulladdress,
      pincode: formValues.pincode,
      city: formValues.city,
      state: formValues.state,
      country: formValues.country,
      id: this.address.id
    }
    this.addressService.editAddress(address).subscribe(
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
