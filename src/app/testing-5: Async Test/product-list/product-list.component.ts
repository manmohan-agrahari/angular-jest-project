import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  searchText:string;
  tempProductList:any[]

  constructor(private productService:ProductServiceService) {
    this.productService.getProductList().subscribe((res)=>{
      this.tempProductList= res;
    })
  }

  ngOnInit(): void {
  }

  getProductList(){

  }

  filterProductList(event) {
    let val = this.searchText
    this.productService.filterProductList(val).then((data)=>{
      this.tempProductList=data
    })

  }

  getFilterCount() {

  }

}
