import { Component, Input } from '@angular/core';
import { Product } from '../../models/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css'],
})

export class ProductComponent {
  @Input() product: Product;
}
