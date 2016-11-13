import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../models/index';

@Injectable()
export class ShoppingBagState {
  private state: BehaviorSubject<string[]>;

  constructor() {
    this.state = new BehaviorSubject([]);
  }

  public get(): Observable<string[]> {
    return this.state.asObservable();
  }

  public addProduct(productId: string): void {
    this.get().first().subscribe((products: string[]) => {
      if (products.indexOf(productId) < 0) {
        this.setState([...products, productId]);
      }
    });
  }

  public removeProduct(productId: string): void {
    this.get().first().subscribe((products: string[]) => {
      const index = products.indexOf(productId)
      if (index >= 0) {
        products.splice(index, 1);
        this.setState(products);
      }
    });
  }

  private setState(nextState: string[]) {
    this.state.next(nextState);
  }
}
