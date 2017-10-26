import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class LocationService {

  constructor(
    private http: Http
  ) { }

  getCurrentAddress(lat, lng){
    return this.http
               .get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=true')
               .map((response: Response) =>{
                 return response.json()
               })
  }
}
