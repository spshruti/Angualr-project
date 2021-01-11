import { Product } from './../../services/product';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], filterText :string): Product[] {
    if(filterText.length<3){
      return products;
    }
    return products.filter((prod)=>prod.productName.toLowerCase().indexOf(filterText.toLocaleLowerCase())!=-1);

  }

}
