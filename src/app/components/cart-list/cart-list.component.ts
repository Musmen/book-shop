import { Component } from '@angular/core';

import { CartItemModel } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  get cartList(): CartItemModel[] {
    return this.cartService.cartProduct;
  }

  constructor(private cartService: CartService) {}
}
