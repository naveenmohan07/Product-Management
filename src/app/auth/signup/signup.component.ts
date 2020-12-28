import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service'
import { Signup } from '../../model/auth'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private UserService : UserService ) { }
  authsub :Subscription
  ngOnInit(): void {
    this.authsub=this.UserService.authListener().subscribe(error=>{
      this.spinner=false
    })
  }
  valid:boolean
  spinner:boolean=false
  onSignup(userdata : NgForm){
    if(userdata.invalid){
      this.valid=true
      return
    }
    this.spinner=true
    const signupcredential:Signup={
      username:userdata.value.username,
      email:userdata.value.email,
      password:userdata.value.password
    }

    this.UserService.onsignup(signupcredential)
  }

}
