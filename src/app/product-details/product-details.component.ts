import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private ps:ProductService) { }

  ngOnInit() {
    //console.log(this.route.snapshot.params.id);
  }

}
