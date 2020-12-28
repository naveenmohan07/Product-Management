import { HttpInterceptor,HttpRequest,HttpHandler,HttpErrorResponse } from '@angular/common/http'

import { catchError } from 'rxjs/operators'

import { throwError } from 'rxjs'
import { Injectable } from '@angular/core'
import { AlertComponent } from './alert/alert.component'
import { MatDialog } from '@angular/material/dialog'

@Injectable()

export class ErrorInterceptor implements HttpInterceptor{

    constructor( private dialog:MatDialog){}

    intercept(req:HttpRequest<any>,next:HttpHandler ){
        return next.handle(req).pipe(
            catchError((err:HttpErrorResponse)=>{
                let errorMessage="An Unknown Error Occured..!!"
                if(err.error.message){
                    errorMessage=err.error.message
                }
                this.dialog.open(AlertComponent,{data:{
                    message:errorMessage
                }});
                return throwError(err)
            })
        )
    }
}