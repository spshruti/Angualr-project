import { ProductService } from './../services/product.service';
import { LoggerService } from './../services/logger.service';
import { Product} from './../services/product';
//import { Product, productList } from '../services/product';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls:['./product.component.css'],
  providers : [
    LoggerService,
    ProductService
  ]

})
export class ProductComponent implements OnInit {
 products: Product[];
  filterText:string="";
  constructor(private logger:LoggerService, private ps:ProductService) {

    this.products=this.ps.getProducts();
  }

  ngOnInit() {
  }


  receiveData(data){
// console.log("data",data);
this.logger.log("Testing parent component");
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
