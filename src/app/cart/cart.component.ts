import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Product } from '../shared/product';
import { ProductsService } from '../shared/products.services/Products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isempt=false
  @ViewChild('nu') amount!:ElementRef<HTMLInputElement>;
  total:number=0
  constructor(private productService: ProductsService,private roue:Router,private route:ActivatedRoute) { }
  public products: Product[] = [];
  local_products:any[]=[]
  id = this.route.snapshot.params['id']
  ngOnInit() {
    this.local_products = JSON.parse(localStorage.getItem('cart')!)
    if(this.local_products.length==0){
      this.isempt=true
    }
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
    this.total_calc()
  }
  enter(element:HTMLElement){
    element.setAttribute('src',this.products[+element.id].main_img2)
    element.classList.add('img-transition'); // Add the transition class
}
leave(element:HTMLElement){
  element.setAttribute('src',this.products[+element.id].main_img)
  element.classList.add('img-transition'); // Add the transition class
}
minuse(nu:any){
  if (+nu.value>1){
    nu.value=+nu.value-1
  }
  this.local_products = JSON.parse(localStorage.getItem('cart')!);
  if (!this.local_products) {
    this.local_products = []; // Initialize cart to an empty array
  }
  this.local_products[+nu.id].amount=+nu.value
  localStorage.setItem('cart', JSON.stringify(this.local_products));
  this.total_calc()
}
plus(nu:any){
  nu.value=+nu.value+1
  this.local_products = JSON.parse(localStorage.getItem('cart')!);
  if (!this.local_products) {
    this.local_products = []; // Initialize cart to an empty array
  }
  this.local_products[+nu.id].amount=+nu.value
  localStorage.setItem('cart', JSON.stringify(this.local_products));
  this.total_calc()
}
navproduct(id:any){
  this.products.map((out:any,i)=>{
    if (out.idd==id){
      this.roue.navigate([`../${i}`])
    }
  })
}
remove(i:number){
  localStorage.removeItem('cart')
  if (this.local_products.length==1){
    this.local_products.splice(0)
  }else{
    this.local_products.splice(i,1)
  }
  localStorage.setItem('cart',JSON.stringify(this.local_products))
  this.local_products = JSON.parse(localStorage.getItem('cart')!)
  if(this.local_products.length==0){
    this.isempt=!this.isempt
  }
  this.total_calc()
}
total_calc(){
  this.local_products = JSON.parse(localStorage.getItem('cart')!);
  if (!this.local_products) {
    this.local_products = []; // Initialize cart to an empty array
  }
  this.total = this.local_products.reduce((acc, curr) => {
    return acc + curr.item.price * curr.amount;
  }, 0);
  this.total = this.total;
  console.log(this.total)
  return this.total;
}
showCheckout = false;

proceedToCheckout() {
  this.showCheckout = true;
}

}


