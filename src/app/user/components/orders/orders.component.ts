import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core'


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



  ngAfterViewInit(){
    // var elements = this.elementRef.nativeElement.querySelectorAll('.fdi-Carousel .item');
    // Array.prototype.forEach.call(elements, function(el, i){
    //   console.log('i:', i)
    //   console.log('el:', el)
    //   var next = el.nextElementSibling
    //   if (!next['children'].length){
    //     next = Array.prototype.filter.call(el.parentNode.children[i].nextSibling, function(child){
    //       return child !== el;
    //     });
    //   }
    //   next.children[0].firstElementChild.cloneNode().appendChild(el)
    //   if(next.nextElementSibling["children"].length > 0) {
    //     next.nextElementSibling.children[0].firstElementChild.cloneNode().appendChild(el)
    //   } else {
    //     Array.prototype.filter.call(el.parentNode.children[i].nextSibling, function(child){
    //       return child.children[0].firstElementChild.cloneNode().appendChild(el);
    //     });
    //   }
    //   console.log('Next:',next)
    // });

  }

}
