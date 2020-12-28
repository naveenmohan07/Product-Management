import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  lat: number = 11.3410;
  lng: number = 77.7172;
  
  ngOnInit(): void {

  }

}
