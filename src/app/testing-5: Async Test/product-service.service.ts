import { Injectable } from '@angular/core'
import { from, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {

  productList:any[]=[
    {
    'title':'bread',
    'price': 20
    },
    {
      'title':'sugar',
      'price':40
    },
    {
      'title':'Almond',
      'price':800
    },
    {
      'title':'cashew',
      'price':700
    },
    {
      'title':'carrot',
      'price': 40
    }
  ]
  constructor() {}

  getProductList() {
    return of(this.productList)
  }
  filterProductList(searchString:string):Promise<any>{
   return of(this.productList.filter(
     (product)=>
     product.title.toLowerCase().indexOf(searchString)> -1)).toPromise()
  }
}
