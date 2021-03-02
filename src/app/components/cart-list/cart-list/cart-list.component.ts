import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CartItemModel } from 'src/app/models/cartItem.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent implements OnInit {
  cartList: CartItemModel[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartList = this.cartService.cartProduct;
  }
}
