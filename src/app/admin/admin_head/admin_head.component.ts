import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductsService } from 'src/app/shared/products.services/Products.service';

@Component({
  selector: 'app-admin_head',
  templateUrl: './admin_head.component.html',
  styleUrls: ['./admin_head.component.css']
})
export class Admin_headComponent implements OnInit,OnDestroy  {
  constructor(private route:ActivatedRoute,private Products:ProductsService) { }
  subscriptions!:any;
  ngOnInit() {
    const sub = this.route.params.subscribe(params=>{
      if (params['ad'] == 'admin') {
        this.Products.con.next(true);
        console.log(true+' is sent');
      } else {
        this.Products.con.next(false);
        console.log(false +' is sent');
      }
    });
    this.subscriptions.add(sub)
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
