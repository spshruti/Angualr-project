import { Product } from './../../services/product';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-tumbnail',
  templateUrl: './product-tumbnail.component.html',
  styles: []
})
export class ProductTumbnailComponent implements OnInit {
  // @Input() products:Product;
  // @Output() sendData:EventEmitter<string>=new EventEmitter<string>();
  @Output('sd') sendData:EventEmitter<string>=new EventEmitter<string>();
  @Input("prd") products:Product;
  constructor() { }

  sendParent(products){
    //var name=prompt("enter name");
   this.sendData.emit(products);
  }

  ngOnInit() {
  }

}
