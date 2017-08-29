import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

//For Social login
import { AuthService } from "angular2-social-login";
//Auth service for user login
import { AuthServiceLocal } from '../../core/services/auth/auth.service'
//User login response model for strong typings
import { IUserLoginResponse } from '../../core/models/user-login.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private authServiceLocal: AuthServiceLocal,
    private authServiceSocail: AuthService,
    private router: Router
  ) { }

  loginForm: FormGroup
  private email: FormControl
  private password: FormControl

  private user
  private sub

  ngOnInit() {
    this.loginFormValidation()
  }

 /** 
  * Function loginFormValidation does the validation on login form using 
  * Reactive Forms from Angular
  */

  loginFormValidation(){
    this.email = new FormControl('test@test.com',[
      Validators.required,
      Validators.email
    ])
    this.password = new FormControl('', [
      Validators.required
    ])
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    })
  }

  login(formValues){
    console.log(formValues)
    this.authServiceLocal.login(formValues).subscribe(
      (response: IUserLoginResponse) => {
        this.refresh()
        this.router.navigate(['/home'])
        return response
      },
      (error: Error) => {
        return error
      }
    ) 
  }

  socailLogin(provider){
    this.sub = this.authServiceSocail.login(provider).subscribe(
      (response) => {
        console.log('Socail response', response)
        //this.user = response
        this.authServiceLocal.socailLogin(response).subscribe(
          (response: IUserLoginResponse) => {
            this.refresh()
            this.router.navigate(['/home'])
            return response
          },
          (error: Error) => {
            return error
          }
        ) 
      }
    )
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnDestroy(){
    //this.sub.unsubscribe();
  }


/*<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1977563699187803',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();   
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
*/
}
