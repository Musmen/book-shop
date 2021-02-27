import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CartItemModel } from 'src/app/models/cartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  @Input() cartList: CartItemModel[];
}
