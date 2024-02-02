import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class Cart_servicesService {

constructor(private http:HttpClient) { }
senddata(data:Cart){
  return this.http.post('https://shopstore-d97b7-default-rtdb.firebaseio.com/Carts.json',data)
}
}
