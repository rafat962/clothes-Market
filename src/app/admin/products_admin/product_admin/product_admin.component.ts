import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product';
import { Admin_serviceService } from '../../admin_service.service';

@Component({
  selector: 'app-product_admin',
  templateUrl: './product_admin.component.html',
  styleUrls: ['./product_admin.component.css']
})
export class Product_adminComponent implements OnInit {
  constructor(private http:Admin_serviceService) { }
  public products: Product[] = [];
  ngOnInit() {
    this.http.getdata()
    this.http.products$.subscribe(data=>{
      this.products = data
      console.log(this.products)
    })
  }
  enter(element:HTMLElement){
    element.setAttribute('src',this.products[+element.id].main_img2)
    element.classList.add('img-transition'); // Add the transition class
  }
  leave(element:HTMLElement){
    element.setAttribute('src',this.products[+element.id].main_img)
    element.classList.add('img-transition'); // Add the transition class
  }
  pro=true
  chang(){
    this.pro=!this.pro
  }
  deletee(x:any){
    alert('deleted successfully')
    this.http.delete(x.idd).subscribe((res: any)=>{
      this.http.getdata()
    })
    this.http.getdata()
    this.http.products$.subscribe(data=>{
      this.products = data
    })
  }
}
