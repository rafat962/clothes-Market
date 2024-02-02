import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/cart/cart';
import { Admin_serviceService } from '../../admin_service.service';

@Component({
  selector: 'app-cart_admin',
  templateUrl: './cart_admin.component.html',
  styleUrls: ['./cart_admin.component.css']
})
export class Cart_adminComponent implements OnInit {
  data:any[]=[]
  itemss:any[]=[]
  itemm:any[]=[]
  id=0
getid(idd:any){
  this.id=idd
  this.itemm=this.itemss[this.id]
  console.log(this.itemm)
}
  constructor(private http:Admin_serviceService) { }
  ngOnInit() {
    this.http.getalldata().subscribe(res=>{
      this.data = res
      for (let x of this.data){
        this.itemss.push(x.items)
      }
      this.itemm=this.itemss[this.id]
      console.log(this.itemss)
      console.log(this.itemm)
    })

  }


}
