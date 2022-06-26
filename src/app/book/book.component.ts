import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  constructor() {}

  ngOnInit(): void {}

  addToCard() {
    this.bookEmitter.emit(this.book);
  }
}
