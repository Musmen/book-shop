import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BookShopComponent } from './components/book-shop/book-shop.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { BooksService } from './services/books/books.service';
import { CartService } from './services/cart/cart.service';
import { CartListComponent } from './components/cart-list/cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookShopComponent,
    CartItemComponent,
    CartListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  providers: [BooksService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
