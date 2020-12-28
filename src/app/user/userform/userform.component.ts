import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../../service/user.service';
import { from } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
  }

  userdata(formdata :NgForm){
    this.UserService.createduserdetail(formdata.value.username,formdata.value.phoneno,formdata.value.email,formdata.value.gender,formdata.value.doorno,formdata.value.street,formdata.value.city,formdata.value.district,formdata.value.pin,formdata.value.product)
  }

}
