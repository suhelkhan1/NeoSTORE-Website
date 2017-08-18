import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../../../core/services/user/user.service'
import { AuthServiceLocal } from '../../../core/services/auth/auth.service'
import { IUser } from '../../../core/models/user.model'

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css']
})
export class ProfileDropdownComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authServiceLocal: AuthServiceLocal,
    private router: Router
  ) {}

  user: IUser
  @Input() isAuthenticated

  ngOnInit() {
  }

  logout(){
    this.authServiceLocal.logout().subscribe(
      (response) => {
        this.refresh()
        this.router.navigate(['/home'])
        this.user = undefined
        return response
      },
      error => error
    )
  }

  refresh(): void {
    window.location.reload();
  }
}
