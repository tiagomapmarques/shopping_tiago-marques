import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() isOnBag: boolean;
  @Output() toggled: EventEmitter<string>;

  constructor() {
    this.toggled = new EventEmitter<string>();
  }

  public toggleInBag(): void {
    this.toggled.emit(this.product.id);
  }
}
