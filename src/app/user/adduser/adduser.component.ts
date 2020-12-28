import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../../service/user.service'
import { from } from 'rxjs';
import { AddUser } from '../../model/auth';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
  }

  spinner:boolean=false
  btndis:boolean


  addUser(userdata : NgForm){
    if(userdata.invalid){
      return
    }
    const adduserCredential:AddUser={
      username:userdata.value.username,
      email:userdata.value.mail
    }
    alert("Employee added Successfully")
    this.UserService.adduser(adduserCredential)
  }
}
