import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, take } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../shared/product';
import { Cart } from '../cart/cart';
import { Auth_serviceService } from '../Auth/auth_service.service';
import { AuthComponent } from '../Auth/Auth.component';
@Injectable({
  providedIn: 'root'
})
export class Admin_serviceService {
constructor(private http:HttpClient , private dataa:Auth_serviceService) { }
private productsSubject = new BehaviorSubject<Product[]>([]);
public products$ = this.productsSubject.asObservable()
  sendData(data:Product){
    return this.dataa.response.pipe(take(1),switchMap((response)=>{
      const idToken = response?.idToken;
      return this.http.post(`https://shopstore-d97b7-default-rtdb.firebaseio.com/products.json?auth=${idToken}`,data)
    }))
  }
  getdata() {
    return this.http.get('https://shopstore-d97b7-default-rtdb.firebaseio.com/products.json?')
      .pipe(
        map((res: any) => {
          const productarray: Product[] = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              productarray.push({ ...res[key], idd: key });
            }
          }
          return productarray;
        })
      ).subscribe(
        (res: Product[]) => {
          this.productsSubject.next(res);
        },
        (error) => {
          console.log('Error fetching data');
        }
      )
  }
  delete(id:string){
    return this.dataa.response.pipe(take(1),switchMap((response)=>{
      const idToken = response?.idToken;
      return this.http.delete(`https://shopstore-d97b7-default-rtdb.firebaseio.com/products/${id}.json?auth=${idToken}`)
    }))
  }
  update(id:string,data:Product){
    return this.dataa.response.pipe(take(1),switchMap((response)=>{
      const idToken = response?.idToken;
      return this.http.put(`https://shopstore-d97b7-default-rtdb.firebaseio.com/products/${id}.json?auth=${idToken}`,data)
    }))
  }
  getalldata(){
    return this.http.get('https://shopstore-d97b7-default-rtdb.firebaseio.com/Carts.json').pipe(take(1),map((res:any)=>{
      const arr:any[]=[]
    for(let key in res){
      if(res.hasOwnProperty(key)){
        arr.push({...res[key]})
      }
    }
    return arr
    }))
  }
  getallitems(){
    return this.http.get('https://shopstore-d97b7-default-rtdb.firebaseio.com/Carts.json').pipe(take(1),map((res:any)=>{
      const arr:any[]=[]
    for(let key in res){
      if(res.hasOwnProperty(key)){
        arr.push({...res[key]}[1])
      }
    }
    return arr
    }))
  }

}
