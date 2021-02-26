import { Component, OnInit } from '@angular/core';

import { BookModel } from 'src/app/models/book.model';
import { mockBooksList } from 'src/app/mock-books/mock-books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  booksList: BookModel[];

  ngOnInit(): void {
    this.booksList = this._getMockBooksList();
  }

  private _getMockBooksList(): BookModel[] {
    return mockBooksList;
  }
}
