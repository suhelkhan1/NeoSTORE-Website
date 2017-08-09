import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../core/services/user/user.service'
import { IUser } from '../../../core/models/user.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  user: IUser

  ngOnInit() {
    this.getCurrentUser()
  }

  getCurrentUser(){
    this.userService.getUserDetails().subscribe(
      (response: IUser) => {
        this.user = response
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

}
