import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Product } from '../../models/index';
import { ShoppingBagState } from '../../states/index';
import { ProductListService } from '../../services/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css'],
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public products: Product[];

  constructor(
    private productListService: ProductListService,
    private shoppingBagState: ShoppingBagState) { }

  public ngOnInit() {
    const shoppingBagProducts = Observable.combineLatest(
      this.productListService.get(),
      this.shoppingBagState.get()
    ).map(([productList, shoppingBag]: [Product[], string[]]): Product[] => {
      return productList.filter((product: Product) => shoppingBag.indexOf(product.id) >= 0);
    });

    this.subscription = shoppingBagProducts.subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
