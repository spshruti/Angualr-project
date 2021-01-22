import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit {
product;Product;
  constructor(private route:ActivatedRoute, private ps:ProductService) { }

  ngOnInit(): void {
    // console.log("id",this.route.snapshot.params.id);

      let id=this.route.snapshot.params.id;
    this.product=this.ps.getProduct(id);
    console.log(this.product);
    // this.route.params.subscribe((parms)=>{
    //   console.log(parms);
    //   // this.product=
    // });

    this.route.fragment.subscribe((parms)=>{
      console.log("testFrament",parms);
      // this.product=
    })
  }

}
