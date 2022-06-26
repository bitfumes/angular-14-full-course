import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    {
      name: 'clean code',
      author: 'robert c martin',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_BO1,204,203,200_.jpg',
      amount: 700,
    },
    {
      name: 'pragmatic programmer',
      author: 'david thomas',
      image: 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
      amount: 800,
    },
    {
      name: 'Art of Computer Programming',
      author: 'Donald John Fuller',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41gCSRxxVeL._SY429_BO1,204,203,200_.jpg',
      amount: 18300,
    },
    {
      name: 'Introduction to Algorithms',
      author: 'T Cormen',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41VndKVtiXL._SX442_BO1,204,203,200_.jpg',
      amount: 1500,
    },
  ];

  card: Book[] = [];

  isShowing: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  addToCard(book: Book) {
    console.log(book);
  }
}
