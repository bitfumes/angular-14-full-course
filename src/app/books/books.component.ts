import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  name: string = 'Clean Code';
  author: string = 'Robert C Martin';
  src: string =
    'https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_BO1,204,203,200_.jpg';

  name2: string = 'Pragmatic Programmer';
  author2: string = 'David Thomas';
  src2: string = 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg';

  isShowing: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
