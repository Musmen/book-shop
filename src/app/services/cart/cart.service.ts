import { Injectable } from '@angular/core';
import { CART_ITEM_COUNT } from 'src/app/common/constants';

import { BookItemModel } from 'src/app/models/book-item.model';
import { CartItemModel } from 'src/app/models/cart-item.model';

@Injectable()
export class CartService {
  cartProduct: CartItemModel[] = [];

  totalQuantity: number;

  totalSum: number;

  addBook(bookItem: BookItemModel): void {
    const purshachedCartItemIndex = this.cartProduct.findIndex(
      (cartItem) => cartItem.name === bookItem.name,
    );
    if (purshachedCartItemIndex !== -1) {
      this.cartProduct[purshachedCartItemIndex] = { ...this.cartProduct[purshachedCartItemIndex] };
      this.cartProduct[purshachedCartItemIndex].count += 1;
    } else {
      const purshachedCartItem: CartItemModel = bookItem;
      purshachedCartItem.count = 1;
      this.cartProduct.push(purshachedCartItem);
    }

    this.cartProduct = [...this.cartProduct];
  }

  removeBook($event: string): void {
    this.cartProduct = this.cartProduct.filter((cartItem: CartItemModel, index: number) => {
      if (cartItem.name === $event) {
        this.cartProduct[index].count = 0;
        return false;
      }
      return true;
    });
  }

  decreaseQuantity(name: string): void {
    const currentCartItemIndex = this._getCurrentCartItemIndex(name);

    this.cartProduct[currentCartItemIndex].count -= 1;
    this._verifyQuantity(currentCartItemIndex);
  }

  increaseQuantity(name: string): void {
    const currentCartItemIndex = this._getCurrentCartItemIndex(name);

    this.cartProduct[currentCartItemIndex].count += 1;
    this._verifyQuantity(currentCartItemIndex);
  }

  private _getCurrentCartItemIndex(name: string): number {
    return this.cartProduct.findIndex((cartItem: CartItemModel) => cartItem.name === name);
  }

  private _verifyQuantity(currentCartItemIndex: number): void {
    if (this.cartProduct[currentCartItemIndex].count < CART_ITEM_COUNT.MIN) {
      this.cartProduct[currentCartItemIndex].count = CART_ITEM_COUNT.MIN;
      return;
    }
    if (this.cartProduct[currentCartItemIndex].count > CART_ITEM_COUNT.MAX) {
      this.cartProduct[currentCartItemIndex].count = CART_ITEM_COUNT.MAX;
    }
  }
}
