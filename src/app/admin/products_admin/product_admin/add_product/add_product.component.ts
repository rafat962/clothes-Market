import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin_serviceService } from 'src/app/admin/admin_service.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-add_product',
  templateUrl: './add_product.component.html',
  styleUrls: ['./add_product.component.css']
})
export class Add_productComponent implements OnInit {
  @ViewChild('f') form!:NgForm;
  send_data!:Product;
  constructor(private http:Admin_serviceService) { }
  ngOnInit() {
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
    this.http.sendData(this.send_data).subscribe(res=>{console.log(res)
    this.alert=!this.alert})
  }

}
