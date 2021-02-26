import { Component, Input } from '@angular/core';

import { BookModel, BookCategories } from 'src/app/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() bookItem: BookModel;

  get bookCategory(): string {
    return BookCategories[this.bookItem.category];
  }
}
