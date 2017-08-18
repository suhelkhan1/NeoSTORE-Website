import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthServiceLocal } from '../core/services/auth/auth.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private authServiceLocal: AuthServiceLocal,
    private router: Router
  ) { }

  ngOnInit() {
    this.authServiceLocal.isAuthenticated().subscribe(
      (response) => {
        return response
      },
      (error) => {
        this.router.navigate(['/login'])
      }
    )
  }

}
