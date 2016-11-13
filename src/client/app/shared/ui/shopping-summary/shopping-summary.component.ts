import { Component, Input } from '@angular/core';
import { Product } from '../../models/index';

@Component({
  moduleId: module.id,
  selector: 'sd-shopping-summary',
  templateUrl: 'shopping-summary.component.html',
  styleUrls: ['shopping-summary.component.css'],
})

export class ShoppingSummaryComponent {
  @Input() products: Product[];

  public totalPrice(): number {
    return this.products && this.products.reduce((count: number, product: Product) => {
      return count + (product.discount ? product.discount.price : product.price);
    }, 0);
  }
}
