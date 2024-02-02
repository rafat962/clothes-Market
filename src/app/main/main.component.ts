import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.services/Products.service';
import { Product } from '../shared/product';
import { map } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private products:Product[]=[]
    product:Product={
    idd:1,
    name: 'Algot Relaxed Wool Check Shirt',
    price: 345,
    color: 'Charcoal Melange',
    size: 'S',
    main_img: '//www.incu.com/cdn/shop/files/230927_Mens_Liam2744_1000x.jpg?v=1695861487',
    main_img2: '//www.incu.com/cdn/shop/files/230927_Mens_Liam2749_1000x.jpg?v=1695861487',
    sub_imgs: ['//www.incu.com/cdn/shop/files/230927_Mens_Liam2748_1000x.jpg?v=1695861487',
    '//www.incu.com/cdn/shop/files/230927_Mens_Liam2753_1000x.jpg?v=1695861487',
    '//www.incu.com/cdn/shop/files/230927_Mens_Liam2743_1000x.jpg?v=1695861487',]
  }
  constructor(private http:ProductsService,private roue:Router) {}
  ngOnInit() {
    this.roue.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
  send(){
    this.http.sendData(this.product).subscribe(res=>console.log(res))
  }
  get(){
    this.http.getdata()
  }

}
