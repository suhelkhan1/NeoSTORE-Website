import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../core/services/user/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  user: any
  profilePic

  ngOnInit() {
    this.userService.getUserDetails().subscribe(
      (response) => {
        this.user = response
        if(this.user.hasOwnProperty('images')){
          this.profilePic = this.user.images.ImgURL
        } else {
          this.profilePic = 'http://soeasyloansonline.com.au/img/testimonial/noimg.png'
        }
        return response
      },
      (error) => {
        this.router.navigate(['/auth/login'])
      }
    )
  }

}
