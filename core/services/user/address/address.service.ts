import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response, Headers, RequestOptions } from '@angular/http'


import { IAddress } from '../../../models/address.model'
import { addressUrl } from '../../../apiUrls';

@Injectable()
export class AddressService {

  constructor(
    private http: Http
  ) { }
  current_user_accesToken: string
  curent_user_userId: string

  getAllAddresses(): Observable<IAddress>{
    this.current_user_accesToken = JSON.parse(localStorage.getItem('currentAppUser'))
    this.curent_user_userId = JSON.parse(localStorage.getItem('currentAppUserId'))
    return this.http.get( addressUrl + 'getAddressbyUserId/' + this.curent_user_userId + '?access_token=' + this.current_user_accesToken).map((response: Response) => {
      return <IAddress>response.json()
    }).catch(this.handleError)
  }

  getAddressById(addressId): Observable<IAddress> {
    return this.http.get( addressUrl + addressId + '?access_token=' + this.current_user_accesToken).map((response: Response) => {
      return <IAddress>response.json()
    }).catch(this.handleError)
  }

  addAddress(address): Observable<IAddress>{
    this.curent_user_userId = JSON.parse(localStorage.getItem('currentAppUserId'))
    this.current_user_accesToken = JSON.parse(localStorage.getItem('currentAppUser'))
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
  
    return this.http.post( addressUrl + 'AddAddress/' + this.curent_user_userId + '?access_token=' + this.current_user_accesToken, JSON.stringify(address), options).map((response: Response) => {
      return <IAddress>response.json()
    }).catch(this.handleError)
  }

  editAddress(address): Observable<IAddress>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
  
    return this.http.patch( addressUrl + address.id + '?access_token=' + this.current_user_accesToken, JSON.stringify(address), options).map((response: Response) => {
      return <IAddress>response.json()
    }).catch(this.handleError)
  }

  deleteAddress(addressId): Observable<IAddress>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
  
    return this.http.delete( addressUrl + addressId + '?access_token=' + this.current_user_accesToken, options).map((response: Response) => {
      return <IAddress>response.json()
    }).catch(this.handleError)
  }

  handleError(error: Response) { 
    return Observable.throw(error.json());
  }

}
