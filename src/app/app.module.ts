import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,Routes } from '@angular/router'
import { NgForm, FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatRadioModule } from '@angular/material/radio'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatSelectModule } from '@angular/material/select'
import { MatStepperModule } from '@angular/material/stepper'
import { MatMenuModule } from '@angular/material/menu'
import { MatDialogModule, MatDialog } from '@angular/material/dialog'

import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { AdduserComponent } from './user/adduser/adduser.component';
import { UserComponent } from './user/user.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UserformComponent } from './user/userform/userform.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorInterceptor } from './error.interceptor';
import { AlertComponent } from './alert/alert.component';
import { HelpComponent } from './help/help.component';
import { SalesComponent } from './product/sales/sales.component';
import { ItemsalesComponent } from './product/sales/itemsales/itemsales.component';
import { ChartsModule } from 'ng2-charts';
import { TrimPipe } from './trim.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AlertComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    AdduserComponent,
    UserComponent,
    ViewuserComponent,
    UserformComponent,
    SpinnerComponent,
    ProductComponent,
    AddproductComponent,
    ViewproductComponent,
    ProfileComponent,
    HelpComponent,
    SalesComponent,
    ItemsalesComponent,
    TrimPipe,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatProgressBarModule,
    MatSelectModule,
    MatStepperModule,
    MatMenuModule,
    MatDialogModule,
    ChartsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALJpJzTnPNLcw9MwfIj816X0P1yqxcxTc'
    })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS ,useClass:ErrorInterceptor ,multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
