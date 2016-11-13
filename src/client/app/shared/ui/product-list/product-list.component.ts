import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductListService } from '../../services/index';
import { Product } from '../../models/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css'],
})

export class ProductListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public products: Product[];

  constructor(private productListService: ProductListService) { }

  public ngOnInit() {
    this.subscription = this.productListService.get().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
