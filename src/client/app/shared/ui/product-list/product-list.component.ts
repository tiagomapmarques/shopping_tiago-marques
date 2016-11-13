import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductListService } from '../../services/index';
import { ShoppingBagState } from '../../states/index';
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
  private subscriptions: Subscription[];
  public products: Product[];
  public shoppingBag: string[];

  constructor(
    private productListService: ProductListService,
    private shoppingBagState: ShoppingBagState
  ) {
    this.subscriptions = [];
  }

  public ngOnInit() {
    this.subscriptions.push(this.shoppingBagState.get().subscribe((shoppingBag: string[]) => {
      this.shoppingBag = shoppingBag;
    }));
    this.subscriptions.push(this.productListService.get().subscribe((products: Product[]) => {
      this.products = products;
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  public isInBag(productId: string): boolean {
    return this.shoppingBag.indexOf(productId) >= 0;
  }

  public toggleInBag(productId: string): void {
    if (this.isInBag(productId)) {
      this.shoppingBagState.removeProduct(productId);
    }
    else {
      this.shoppingBagState.addProduct(productId);
    }
  }
}
