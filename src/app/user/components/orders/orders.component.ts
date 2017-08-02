import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, AfterViewInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  
  ngOnInit() {
  }

/*  $(document).ready(function () {
    $('#myCarousel').carousel({
      interval: 10000
    })
    $('.fdi-Carousel .item').each(function () {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
      } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });
  });*/

  ngAfterViewInit(){
    let element = this.elementRef.nativeElement.querySelectorAll('.fdi-Carousel .item')
    Array.prototype.forEach.call(element, function(){
      let next = element.nextElementSibling
      if(!next.length) {
        next = Array.prototype.filter.call(element.parentNode.children, function(child){
          return child !== element;
        });
      }
      next.children.cloneNode(true).appendChild(element);
      if(next.nextElementSibling.length >0){
        next.nextElementSibling.children.cloneNode(true).appendChild(element);     
      } else {
        element = Array.prototype.filter.call(element.parentNode.children, function(child){
          return child !== element;
        });
        element.children.cloneNode(true).appendChild(element);
      }
    });



  }

}
