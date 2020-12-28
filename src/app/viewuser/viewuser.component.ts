import { Component, OnInit } from '@angular/core';
import { User } from '../model/userdetail.model'
import { UserService } from '../service/user.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  constructor(private UserService :UserService) { }

  userdetails:User[]=[]
  user:Subscription
  spinner:boolean=true

  ngOnInit(): void {
    this.UserService.viewuserdetails()
    this.user=this.UserService.userlistener().subscribe((data:User[])=>{
      this.spinner=false
      this.userdetails=data
    })
  }


}
