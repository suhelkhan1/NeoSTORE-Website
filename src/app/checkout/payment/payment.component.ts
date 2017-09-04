import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Validator } from '@angular/forms';
import { CheckoutService } from '../../core/services/checkout/checkout.service';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  

  message: string;

  paymentForm: FormGroup
  cardNumber: FormControl
  expiryMonth: FormControl
  expiryYear: FormControl
  cvc: FormControl
  isSubmit: boolean = false

  constructor(
    private checkoutService: CheckoutService,
    private router: Router
  ){}

  ngOnInit(){
    this.paymentFormValidation()
    this.checkCart()
  }

  checkCart(){
    let data = this.checkoutService.getData()
    if(!Object.keys(data).length){
      this.router.navigate(['/checkout/cart'])      
    }
  }

  paymentFormValidation(){
    this.cardNumber = new FormControl('4242424242424242', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(16)
    ])
    this.expiryMonth = new FormControl('06', [
      Validators.required,
      Validators.min(1),
      Validators.max(12)
    ])
    this.expiryYear = new FormControl('22', [
      Validators.required,
      Validators.min(17),
      Validators.max(28)
    ])
    this.cvc = new FormControl('111', [
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(3)
    ])

    this.paymentForm = new FormGroup({
      cardNumber: this.cardNumber,
      expiryMonth: this.expiryMonth,
      expiryYear: this.expiryYear,
      cvc: this.cvc,
    })
  }

  payment(card){
    this.isSubmit = true
    this.checkoutService.payment(card).subscribe(
      (response) => {
        this.router.navigate(['/commons/thankyou'])
        return response
      }
    )
  }



  
}
