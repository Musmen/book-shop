import { Injectable } from '@angular/core';

import { mockBooksList } from 'src/app/mock-books/mock-books';
import { BookModel } from '../models/book.model';

@Injectable()
export class BooksService {
  getBooks(): BookModel[] {
    return mockBooksList;
  }
}
