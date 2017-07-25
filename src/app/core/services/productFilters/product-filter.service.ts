import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response} from '@angular/http';
@Injectable()
export class ProductFilterService {

  constructor(
    private http:Http
  ) { }

}
