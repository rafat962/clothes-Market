import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Product } from '../shared/product';
import { ProductsService } from '../shared/products.services/Products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductsService,private roue:Router,private route:ActivatedRoute) { }
  public products: Product[] = [];
  @ViewChild('nu') amount!:ElementRef<HTMLInputElement>;
  cart:any=[]
  id=0
  alert=false
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=+params['id']
      this.productService.getdata();
      console.log(this.id)
    })
    this.productService.products$.subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    )
    this.roue.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.alert=false
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
addtobag() {
  this.cart = JSON.parse(localStorage.getItem('cart')!);
  if (!this.cart) {
    this.cart = []; // Initialize cart to an empty array
  }
  this.cart.push({amount:this.amount.nativeElement.value,item:this.products[this.id]});
  localStorage.setItem('cart', JSON.stringify(this.cart));
  this.alert=!this.alert
}
minuse(nu:any){
  if (+nu.value>1){
    nu.value=+nu.value-1
  }
}
plus(nu:any){
  nu.value=+nu.value+1
}
}
