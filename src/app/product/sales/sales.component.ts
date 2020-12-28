import { Component, createPlatformFactory, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { FormControl, NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { _ParseAST } from '@angular/compiler';

@Component({
  selector: 'app-invoice',
  templateUrl: '../../invoice/invoice.component.html'
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  produc
  productlis:Subscription
  
  constructor(private UserService:UserService,private ProductService:ProductService,public dialog: MatDialog) { }
  

  systemhour:any
  systemmin:any
  systemsec:any
  systemmonth:any
  systemdate:any
  username:any
  cartArray = [];  
  tot
  productName=[]
  result=''
  amt=[]
  sum
  getTime(){
    this.systemhour=new Date().getHours()
    this.systemmin=new Date().getMinutes()
    this.systemsec=new Date().getSeconds()
    this.systemdate=Date().slice(0,15)
  }
  
  addCart(event){
    this.cartArray.push(event)
    // console.log(this.result)
  }  

  addamount(event){
    console.log(this.cartArray)
    this.cartArray.forEach(each=>{
      this.tot=each.productamt*event.target.value
      each.producttot=this.tot
   })
    this.amt.push(this.tot)
    this.sum=this.amt.reduce((a,b)=>a+b)
  }

  openDialog() {
    const dialogRef = this.dialog.open(InvoiceComponent);

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  ngOnInit(): void {
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
      this.result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    setInterval(call=>{
      this.getTime();
    },60)
    this.username=this.UserService.retrivemail() || 'Guest'
    this.ProductService.dispProduct()
    this.productlis=this.ProductService.productlisterner().subscribe((data:Product[])=>{
      this.produc=data
    })
     

  }
 
 
}
