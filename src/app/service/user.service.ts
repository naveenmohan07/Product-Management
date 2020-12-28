import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Routes, ActivatedRoute, Router } from '@angular/router'
import { Observable, throwError } from 'rxjs';
import { Signup, Auth ,AddUser} from '../model/auth';
import { User } from '../model/userdetail.model'
import { Subject } from 'rxjs'
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user
  private signinUser
  usercount
  private users:User[] =[]
  private usersub=new Subject<User[]>();
 token:string
 authenticated:boolean=false
 public email

  constructor(private http : HttpClient,private route :Router) { }
  private authstatus=new Subject<boolean>();

  gettoken(){
    return this.token
  }

  adduser(adduserCredential){
      const Createuser:AddUser={
        username:adduserCredential.username,
        email:adduserCredential.email
      }
      this.http.post<AddUser>('http://localhost:3000/adduser',Createuser).subscribe((data)=>{
          console.log(data)
    })
  }
  
  authListener(){
    return this.authstatus.asObservable()
  }

  onsignup(signupcredentials){
    this.user={
      username:signupcredentials.username,
      email:signupcredentials.email,
      password:signupcredentials.password
    }
    this.http.post<Signup>('http://localhost:3000/signup',this.user).subscribe((data)=>{
      this.route.navigate(["./home"])
      console.log(data)
    },error=>{
      this.authstatus.next(false)
    })
  }

  onsignin(credentials){
    this.signinUser={
      email:credentials.email,
      password:credentials.password
    }
    this.http.post<{token:string,usermail:any}>('http://localhost:3000/signin',this.signinUser).subscribe((data)=>{
          const token=data.token
          this.email=data.usermail
          this.token=token
          if(token){
            this.authenticated=true
            this.authstatus.next(true)
          }
          this.route.navigate(["./home"])
         },error=>{
            this.authstatus.next(false);
            this.authenticated=false
       })
    }

    retrivemail(){
      return this.email
    }

  createduserdetail(username,phone,mail,door,gender,street,city,district,pin,product){
    const saveuser:User={
      username:username,
      phone:phone,
      mail:mail,
      door:door,
      gender:gender,
      street:street,
      city:city,
      district:district,
      pin:pin,
      product:product
    }
    this.http.post<User>('http://localhost:3000/saveuserdetails',saveuser).subscribe((data)=>{
    this.users.push(saveuser)
    this.usersub.next([...this.users])
  })
  }

  saveauth(token:string){
    localStorage.setItem("token",token)
  }

  gettokenlocal(){
    const token = localStorage.getItem("token")
  }

  userlistener(){
    return this.usersub.asObservable()
  }

  viewuserdetails() :Observable<any>{
    return this.http.get<{message:String,userdetails:User[]}>('http://localhost:3000/viewuserdetails')
  }


  logout(){
    this.token=null
    this.authenticated=false
    this.authstatus.next(false)
  }


  getauth(){
    return this.authenticated
  }



}
