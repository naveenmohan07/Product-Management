import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UserformComponent } from './user/userform/userform.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponent } from './help/help.component';
import { SalesComponent } from './product/sales/sales.component';

const route:Routes=[{
  path:'adduser', component:AdduserComponent,canActivate:[AuthGuard]
},
{
  path:'home' ,component:HomeComponent
},
{
 path:'',component:AuthComponent,children:[{
   path:'signup',component:SignupComponent
 },
{
  path:'signin',component:SigninComponent
}]
},
{
  path:'viewuserdetails',component:ViewuserComponent,canActivate:[AuthGuard]
},
{
  path:'userform',component:UserformComponent
},
{
  path:'addproduct',component:AddproductComponent,canActivate:[AuthGuard]
},
{
  path:'viewproduct',component:ViewproductComponent
},
{
  path:'sales',component:SalesComponent
},
{
  path:'help',component:HelpComponent
},
{
  path:'userprofile',component:ProfileComponent
}]



@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
