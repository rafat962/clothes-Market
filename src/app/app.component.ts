import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './shared/products.services/Products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private route:ActivatedRoute,private products:ProductsService){}
  title = 'shop_store';
  control!:boolean ;
  id=0;
  alert=false;
  ngOnInit() {
    this.products.con.subscribe(data=>{
      this.control = data
      console.log('here is '+this.control)
    })
  }
}

