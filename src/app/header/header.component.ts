import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // data: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  data:any=[]
  constructor() { }
  ngOnInit() {
    setInterval(() =>{
      this.data = JSON.parse(localStorage.getItem('cart')!)
    },100)
  }

}
