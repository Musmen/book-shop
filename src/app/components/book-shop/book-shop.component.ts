import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BookModel } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books/books.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-book-shop',
  templateUrl: './book-shop.component.html',
  styleUrls: ['./book-shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookShopComponent implements OnInit {
  booksList: BookModel[];

  constructor(private cartService: CartService, private bookService: BooksService) {}

  get cartTotalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  ngOnInit(): void {
    this.booksList = this.bookService.getBooks();
  }
}
