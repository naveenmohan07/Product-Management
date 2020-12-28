import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../service/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  authenticated = false
  authlistener:Subscription

  constructor(private auth:UserService,private route:Router) { }
  ngOnInit(): void {
    this.authlistener=this.auth.authListener().subscribe((data)=>{
      this.authenticated=this.auth.getauth()  
    },err=>{
      alert(err)
      this.authenticated=false
    })
    this.authenticated=this.auth.getauth()
  }

  logout(){
    this.auth.logout()
    this.route.navigate([""])
  }
}
