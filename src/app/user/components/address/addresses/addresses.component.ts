import { Component, OnInit } from '@angular/core';

import { AddressService } from '../../../../core/services/user/address/address.service'
import { IAddress } from '../../../../core/models/address.model'

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  constructor(
    private addressService: AddressService
  ) { }

  addresses: IAddress

  ngOnInit() {
    this.getAddress()
  }

  getAddress(){
    this.addressService.getAllAddresses().subscribe(
      (response: IAddress) => {
        this.addresses = response
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

}
