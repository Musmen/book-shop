import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CartItemModel } from 'src/app/models/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() cartItem: CartItemModel;
}
