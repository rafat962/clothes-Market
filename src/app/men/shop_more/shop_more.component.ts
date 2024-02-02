import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product';
import { ProductsService } from 'src/app/shared/products.services/Products.service';

@Component({
  selector: 'app-shop_more',
  templateUrl: './shop_more.component.html',
  styleUrls: ['./shop_more.component.css']
})
export class Shop_moreComponent implements OnInit {
  constructor(private productService: ProductsService) { }
  public products: Product[] = [];
  ngOnInit() {
    this.productService.getdata();
    this.productService.products$.subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    )
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
