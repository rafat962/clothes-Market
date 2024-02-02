import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { Product } from '../shared/product';
import { Logindata } from './logindata';

@Injectable({
  providedIn:'root'
})
export class Auth_serviceService {
  private responsee = new BehaviorSubject<Logindata|null>(null);
  public response = this.responsee.asObservable()
  private errors = new BehaviorSubject<any>(null);
  public error$ = this.errors.asObservable()
constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJRo_UR7H-yOKfWwpitTcyXOetJFPwNMw',data)
    .pipe(
      map((res: any) => {
        this.responsee.next(res);
        return res;
      })
      ,
      catchError((error) => {
        this.errors.next(error)
        return throwError(error);
      })
    )
    .subscribe(res => {},rej=>{});
}}


// .subscribe((res)=>{this.response=res
//   console.log(this.response.idToken)
//   },(error)=>{console.log(error)})
// }
