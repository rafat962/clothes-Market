import { Product } from "../shared/product"

export interface Cart {
  userdata:{
    fname:string,
    lname:string,
    email:string,
    city:string,
    state:string,
    zip:number
  }
  items:Product[]
}
