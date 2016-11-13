import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductComponent, ProductListComponent, ShoppingListComponent, ShoppingSummaryComponent } from './ui/index';
import { ProductListService } from './services/index';
import { ShoppingBagState } from './states/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ProductComponent, ProductListComponent, ShoppingListComponent, ShoppingSummaryComponent],
  exports: [ProductComponent, ProductListComponent, ShoppingListComponent, ShoppingSummaryComponent,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ProductListService, ShoppingBagState]
    };
  }
}
