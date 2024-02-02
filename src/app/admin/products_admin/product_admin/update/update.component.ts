import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Admin_serviceService } from 'src/app/admin/admin_service.service';
import { Product } from 'src/app/shared/product';
import { ProductsService } from 'src/app/shared/products.services/Products.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @ViewChild('f') form!:NgForm;
  current_data!:Product;
  send_data!:Product;
  constructor(private http:Admin_serviceService,private data:ProductsService,private rout:ActivatedRoute) { }
  id=0
  idd=''
  name!: string;
  price!: number;
  color!: string;
  size!: string;
  main_img!: string;
  main_img2!: string;
  sub1!: string;
  sub2!: string;
  sub3!: string;
  ngOnInit() {
    this.rout.params.subscribe(params=>{
      this.id = +params['id']
      console.log(this.id)
    })
    this.data.getdata()
    this.data.products$.subscribe((res:any)=>{
      this.current_data = res
      console.log(this.current_data)
      this.idd = res[this.id].idd
      this.name = res[this.id].name
      this.price = +res[this.id].price
      this.color = res[this.id].color
      this.size = res[this.id].size
      this.main_img = res[this.id].main_img
      this.main_img2 = res[this.id].main_img2
      this.sub1 = res[this.id].sub_imgs[0]
      this.sub2 = res[this.id].sub_imgs[1]
      this.sub3 = res[this.id].sub_imgs[2]
    })
  }
  alert=false
  sub(){
    this.send_data = {
      name: this.form.value.name,
      price:+this.form.value.Price,
      color:this.form.value.color,
      size:this.form.value.size,
      main_img:this.form.value.main_img,
      main_img2:this.form.value.main_img2,
      sub_imgs:[this.form.value.sub1,this.form.value.sub2,this.form.value.sub3]
    }
    this.http.update(this.idd,this.send_data).subscribe(res=>{console.log(res)
    this.alert=!this.alert})
  }


}
