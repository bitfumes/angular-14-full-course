import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  author: string;
  image: string;
  amount: number;
}

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
  ];

  isShowing: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
