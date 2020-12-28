import { Injectable } from '@angular/core';
import { Product } from '../model/product'
import { Observable, Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:Product[] =[]
  private productsub=new Subject<Product[]>();
  constructor(private http:HttpClient) { }
  
  addProduct(productname,productmodel,productqty,productdate,productdesc,productamt){
    const newproduct:Product={
      productname:productname,
      productmodel:productmodel,
      productqty:productqty,
      productdate:productdate,
      productdesc:productdesc,
      productamt:productamt
    }
    this.http.post<{message:string}>('http://localhost:3000/addproduct',newproduct).subscribe((data)=>{
      this.products.push(newproduct)
      this.productsub.next([...this.products])
    })
  }
  dispProduct(){
    this.http.get<{message:string,products:Product[]}>('http://localhost:3000/listproduct').subscribe((data)=>{
      this.products=data.products
      this.productsub.next([...this.products])
    })
  }
  productlisterner(){
    return this.productsub.asObservable()
  }

  display() :Observable<any>{
    return this.http.get<{message:string,products:Product[]}>('http://localhost:3000/listproduct')
    }
  
  
}
