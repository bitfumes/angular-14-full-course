import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  author: string;
  image: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert C Martin',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_BO1,204,203,200_.jpg',
    },
    {
      name: 'Pragmatic Programmer',
      author: 'David Thomas',
      image: 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
    },
  ];

  isShowing: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
