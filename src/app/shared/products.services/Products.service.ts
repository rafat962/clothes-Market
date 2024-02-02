import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { map, take } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
constructor(private http:HttpClient) { }
private productsSubject = new BehaviorSubject<Product[]>([]);
public products$ = this.productsSubject.asObservable()
  sendData(data:Product){
    return this.http.post('https://shopstore-d97b7-default-rtdb.firebaseio.com/products.json',data)
  }
  getdata() {
    return this.http.get('https://shopstore-d97b7-default-rtdb.firebaseio.com/products.json')
      .pipe(take(1),
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
  con= new Subject<boolean>()



}
