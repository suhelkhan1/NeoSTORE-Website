import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'



import { AddressService } from '../../../../core/services/user/address/address.service'
import { IAddress } from '../../../../core/models/address.model'
import { LocationService } from '../../../../core/services/location/location.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {


  addAddressForm: FormGroup
  private fulladdress: FormControl
  private pincode: FormControl
  private city: FormControl
  private state: FormControl
  private country: FormControl
  //currentAddress

  constructor(
    private router: Router,
    private addressService: AddressService,
    private locationService :LocationService
  ) { }

  ngOnInit() {
    this.addAddressFormValidation()
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.locationService.getCurrentAddress(
          position.coords.latitude, 
          position.coords.longitude
        ).subscribe(
          (response) =>{
            let currentAddress = response.results[0].address_components
            let i =0;
            for(let object of (<any>Object).values(currentAddress)){
              if(object.types[0] === 'postal_code'){
                this.pincode.setValue(object.long_name)
              } else if(object.types[0] === 'administrative_area_level_2'){
                this.city.setValue(object.long_name)
              } else if(object.types[0] === 'administrative_area_level_1'){
                this.state.setValue(object.long_name)
              } else if(object.types[0] === 'country'){
                this.country.setValue(object.long_name)
              }
              i++;
            }
            //console.log('Current Address', this.currentAddress)
            return response
          }
        )
        console.log(position)
      });
    }
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
