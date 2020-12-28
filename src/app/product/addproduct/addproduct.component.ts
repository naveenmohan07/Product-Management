import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  product
  added:boolean=false
  addproduct(product:NgForm){
    if(product.valid){
      this.productService.addProduct(product.value.productname,product.value.productmodel,product.value.productqty,product.value.productdate,product.value.productdesc,product.value.productamt)
      this.added=true
      product.reset()
     }
    else{
      return 
    }
  }
}
