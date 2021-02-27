import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { APP_TITLE } from 'src/app/common/constants';
import { mockBooksList } from 'src/app/mock-books/mock-books';
import { BookModel } from 'src/app/models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;

  booksList: BookModel[];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.booksList = this._getMockBooksList();
  }

  ngAfterViewInit(): void {
    this.renderer.setProperty(this.appTitle.nativeElement, 'textContent', APP_TITLE);
  }

  private _getMockBooksList(): BookModel[] {
    return mockBooksList;
  }
}
