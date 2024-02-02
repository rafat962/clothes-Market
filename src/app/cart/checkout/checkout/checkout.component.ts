import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/shared/product';
import { Cart } from '../../cart';
import { Cart_servicesService } from '../../cart_services.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations:[
    trigger('divstate',[
      state('normal',style({
        opacity:0,
        transform:'translateX(-100px)',
      })),
      state('neww',style({
        opacity:1,
        transform:'translateX(0px)'
      })),
      transition('normal <=> neww',animate(500))
    ]),
    trigger('divstate2',[state('normal',style({
      transform:'translateX(900px)'
    })),state('neww',style({
      transform:'translateX(0px)'
    })),transition('normal <=> neww',animate(900))
  ]),
    trigger('divstate3',[state('normal',style({
      transform:'translateY(-200px)'
    })),state('neww',style({
      transform:'translateX(0px)'
    })),transition('normal <=> neww',animate(600))
  ]),
    trigger('divstate4',[state('normal',style({
      transform:'translateY(800px)'
    })),state('neww',style({
      transform:'translateX(0px)'
    })),transition('normal <=> neww',animate(700))
  ]),
  ]
})
export class CheckoutComponent implements OnInit {
  constructor(private http:Cart_servicesService) { }
  product:Product[]=[]
  alert=false
  state='normal'
  cartdata!:Cart;
  @ViewChild('f') myform!:NgForm;
  ngOnInit() {
    this.product = JSON.parse(localStorage.getItem('cart')!)
    setTimeout(() => {
      this.state = 'neww'
    }, 300);
  }
  sub(){
    this.cartdata={userdata:{
      fname:this.myform.value.name,
      lname:this.myform.value.lname,
      email:this.myform.value.email,
      city:this.myform.value.city,
      state:this.myform.value.state,
      zip:this.myform.value.zip,
    },items:this.product}
    this.http.senddata(this.cartdata).subscribe(()=>{})
    this.alert=!this.alert
  }

}
