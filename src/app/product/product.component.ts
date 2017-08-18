import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    public toastr: ToastsManager, vRef: ViewContainerRef
  ) { 
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
  }

}
