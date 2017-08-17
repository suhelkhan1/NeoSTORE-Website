import { Component, OnInit, Input, TemplateRef, ViewChild  } from '@angular/core';

import { AuthServiceLocal } from '../../../core/services/auth/auth.service'
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { IStarRatingOnClickEvent } from "angular-star-rating/star-rating-struct";

import { RatingService } from '../../../core/services/rating/rating.service'
import { IRating } from '../../../core/models/rating.model'
import { IProduct } from '../../../core/models/product.model'

@Component({
  selector: 'app-rate-modal',
  templateUrl: './rate-modal.component.html',
  styleUrls: ['./rate-modal.component.css']
})
export class RateModalComponent implements OnInit {

  public modalRef: BsModalRef;
  putRating;
  constructor(
    private authServiceLocal: AuthServiceLocal,
    private modalService: BsModalService,
    private ratingService: RatingService
    ) { 
   
  }

  @ViewChild(ModalDirective) public modal: ModalDirective;
  @Input() isAuthenticated
  @Input() product :IProduct
  curent_user_userId = JSON.parse(localStorage.getItem('currentAppUserId'))
  ngOnInit() {
  }

   public openModal(template: TemplateRef<any>) {
     var val=this.authServiceLocal.isAuthenticated;
     console.log("login to rate",val);
     if(val){
    this.modalRef = this.modalService.show(template);
     }
     else{
       console.log("login to rate");
     }
  }
  
  onClick(a){

      this.putRating=a.rating;
      console.log(this.putRating);
  }

  public closeFirstModal() {
    
      var data={
        rating:this.putRating,
        user_id:this.curent_user_userId,
        product_id:this.product.id
      }

      console.log("dada before insert",data)

    this.ratingService.postrating(data).subscribe(
      (response: IRating) => {
        //this.router.navigate(['/user/addresses'])
        return response
      },
      (error: Error) => {
        return error
      }
    )
    
    
    this.modalRef.hide();
    this.modalRef = null;
  }

 
}
