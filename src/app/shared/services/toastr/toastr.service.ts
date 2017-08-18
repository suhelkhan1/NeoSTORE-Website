/*import { Injectable } from '@angular/core';

@Injectable()
export class ToastrService {

  constructor() { }

}*/


import { ToastOptions, ToastsManager } from 'ng2-toastr';

export class ToastrService extends ToastOptions {
  animate = 'flyLeft'; // you can override any options available
  newestOnTop = false;
  showCloseButton = true;
  dismiss = 'auto'
  toastLife = 2000
}
