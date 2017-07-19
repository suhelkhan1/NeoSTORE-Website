import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { IUser } from '../../../core/models/user.model'


@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }

}
