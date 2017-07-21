import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    /*jQuery('.media-carousel .item').each(
      ()=>{
        let next = jQuery(this).next()
        if(!next.length){
          next = jQuery(this).siblings(':first')
        }
        next.children(':first-child').clone().appendTo(jQuery(this))
        if(next.next().length > 0){
          next.next().children(':first-child').clone().appendTo(jQuery(this))
        } else {
          jQuery(this).siblings(':first').children(':first-child').clone().appendTo(jQuery(this))
        }
      }
    )*/
    /*let element = this.elementRef.nativeElement.querySelectorAll('#Carousel')
    console.log(element)
    element.forEach(() => {
      let next = element.next
    });*/
  }

}
