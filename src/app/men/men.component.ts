import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.services/Products.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/product';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  constructor(private productService: ProductsService,private roue:Router) { }
  public products: Product[] = [];
  ngOnInit() {
    this.productService.getdata();
    this.productService.products$.subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    )
    this.roue.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
  enter(element:HTMLElement){
      element.setAttribute('src',this.products[+element.id].main_img2)
      element.classList.add('img-transition'); // Add the transition class
  }
  leave(element:HTMLElement){
    element.setAttribute('src',this.products[+element.id].main_img)
    element.classList.add('img-transition'); // Add the transition class
}
}


