import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import * as XLSX from 'xlsx';
import { ProductService } from '../service/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  produc=[]
  productlis:Subscription
  data:[][];
  constructor(private userService: UserService,private ProductService:ProductService) { }

  onFileChange(event){
    const target:DataTransfer=<DataTransfer>(event.target)
    if(target.files.length >1)throw new Error("Upload One file")
    const reader:FileReader=new FileReader();
    reader.onload=(e)=>{
      const bstring=e.target.result;

      const wb:XLSX.WorkBook=XLSX.read(bstring,{type:"binary"})
      const wsheet=wb.SheetNames[0];

      const ws:XLSX.WorkSheet=wb.Sheets[wsheet]
      this.data = (XLSX.utils.sheet_to_json(ws,{header:1}))
      console.log(this.data)
    }
    reader.readAsBinaryString(target.files[0]);
  }

  a=0;
  namew;
  users;
  count;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2012', '2014', '2016', '2018', '2020', '2022', '2024', '2026'];
  public barChartType = 'bar';
  public barChartLegend = true;
  
  public barChartData = [
    {data: [65, 59, 80, 81, 56,]  , label: 'Sales'},
    {data: [28, 48, 40, 19, 86, ], label: 'Buy'}
  ];
  
  

  ngOnInit(): void {
    this.namew = this.userService.retrivemail();
    this.userService.viewuserdetails().subscribe((data)=>{
      this.users=data.userdetails
      this.count=this.users.length
    })
    this.ProductService.dispProduct()
    this.productlis=this.ProductService.productlisterner().subscribe((data:Product[])=>{
      this.produc=data
      console.log(this.produc)
      for(let i=0;i<this.produc.length;i++){
        if(this.produc[i].productqty<20){
          this.a++;
          console.log(this.a)
        }
      }
    })
  }
}