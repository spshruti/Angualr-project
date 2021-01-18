import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-product',
  templateUrl: './temp-product.component.html',
  styleUrls: ['./temp-product.component.scss'],
  providers:
  [
    ProductService
  ]
})
export class TempProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
