import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product'
import { ProductService } from '../../service/product.service'
import { Subscription, from } from 'rxjs'
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  constructor(private productService:ProductService) { }

  value:any
  products:Product [] = []
  spinner:boolean=true
  product:Subscription
  searchproduct=[]
  checked:boolean=true
  productname
  productmodel
  productdesc
  productqty
  productfill
  productamt
  wid=30;
// generatexml(){
//   const title = 'Sell Report';
//   const header = ["Model_Number","Product_Name","Product_Description","Quantity","Amount","Filled"]
//   const workbook = new Workbook();
//   const worksheet = workbook.addWorksheet('Product_List');
  
//   let headerRow = worksheet.addRow(header);
//   for(let i=0;i<this.products.length;i++){
//     this.productmodel=this.products[i].productmodel
//     this.productname=this.products[i].productname
//     this.productdesc=this.products[i].productdesc
//     this.productqty=this.products[i].productqty
//     this.productfill=this.products[i].productdate
//     this.productamt=this.products[i].productamt
//     const data = [
//       [this.productmodel,this.productname,this.productdesc,this.productqty,this.productfill,this.productamt]
//     ]
//     worksheet.addRows(data)
// }


// worksheet.getColumn(1).width = 10;
// worksheet.getColumn(2).width = 20;
// worksheet.getColumn(3).width = 20;
// worksheet.getColumn(4).width = 10;
// worksheet.getColumn(5).width = 20;
// worksheet.getColumn(6).width = 20;
//   workbook.xlsx.writeBuffer().then((data) => {
//     let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//     fs.saveAs(blob, 'Product_list.xlsx');
//   })
// }

  ngOnInit(): void {

    this.productService.dispProduct()
    this.product=this.productService.productlisterner().subscribe((data:Product[])=>{
    this.products=data
    this.spinner=false

    })
  }
 

}
