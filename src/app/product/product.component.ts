import { Product, productList } from './../services/product';
//import { Product, productList } from '../services/product';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls:['./product.component.css']

})
export class ProductComponent implements OnInit {
  products: Product[] = productList;
  filterText:string;
  constructor() { }

  ngOnInit() {
  }


  receiveData(data){
console.log("data",data);
  }
  getClass(prod){
    console.log("prod",prod)
    if(!prod.description){

      return 'noDescr'
  }
  else{
    return 'green'
  }
}
}
