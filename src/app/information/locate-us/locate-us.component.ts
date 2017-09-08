import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locate-us',
  templateUrl: './locate-us.component.html',
  styleUrls: ['./locate-us.component.css']
})
export class LocateUsComponent implements OnInit {

  lat: number = 19.141182;
  lng: number = 73.008718;

  constructor() { }

  ngOnInit() {
  }

}
