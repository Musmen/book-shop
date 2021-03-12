import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersModule } from '@orders/orders.module';
import { MaterialModule } from '@material/material.module';
import { OnHoverColorizerDirective } from './directives/on-hover-colorizer.directive';

@NgModule({
  declarations: [OnHoverColorizerDirective],
  imports: [CommonModule, MaterialModule, OrdersModule],
  exports: [CommonModule, MaterialModule, OrdersModule, OnHoverColorizerDirective],
})
export class SharedModule {}
