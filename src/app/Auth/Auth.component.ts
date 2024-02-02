import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth_serviceService } from './auth_service.service';
import { Logindata } from './logindata';

@Component({
  selector: 'app-Auth',
  templateUrl: './Auth.component.html',
  styleUrls: ['./Auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:Auth_serviceService) {
  }
  sighninform!:FormGroup;
  data:any;
  response!:any;
  alart=false
  errror!:string
  errormessga=''
  danger=false
  ngOnInit() {
    this.sighninform = new FormGroup({
      'email':new FormControl,
      'password':new FormControl
    })
  }
  login(){
    this.data={
      'email':this.sighninform.value.email,
      'password':this.sighninform.value.password,
      'returnSecureToken':true
    }
    this.http.login(this.data)
    this.http.error$.subscribe(
      (err:any)=>{
        console.log(err.error.error.message)
        this.errormessga= err.error.error.message
        this.danger=true
      }
    )
    this.http.response.subscribe(
      (res: any) => {
        console.log(res.idToken)
        this.alart = !this.alart;
      }
    );}

}
