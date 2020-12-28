import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../../service/user.service'
import { Auth } from '../../model/auth'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private UserService : UserService) { }
  err
  authsub:Subscription
  ngOnInit(): void {
      this.authsub=this.UserService.authListener().subscribe(authstatus=>{
      this.spinner=false
    },error=>{
      this.err=error.err.message
    })
  }
  valid:boolean
  spinner:boolean=false
  onSignin(userdata : NgForm){
      if(userdata.invalid){
        this.valid=true
        return
      }
      this.spinner=true
      const credential:Auth ={
        email:userdata.value.email,
        password:userdata.value.password
      }
      this.UserService.onsignin(credential);

    }
  }
