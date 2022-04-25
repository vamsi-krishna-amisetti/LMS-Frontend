import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {

  constructor(private service : SharedService) { }
  @Input() book: any;
  bookId: number = 0;
  bookName: string = "";
  isbn: string = "";
  description: string = "";
  publisher: string = "";
  author: string = "";
  location: string = "";
  quantity: string = "";
  issued: string = "";
  bookIssuedId: string = "";

  ngOnInit(): void {
    this.bookId = this.book.bookId
    this.bookName = this.book.bookName
    this.isbn = this.book.isbn
    this.description = this.book.description
    this.publisher = this.book.publisher
    this.author = this.book.author
    this.location = this.book.location
    this.quantity = this.book.quantity
    this.issued = this.book.issued
    this.bookIssuedId = this.book.bookIssuedId
  }

  addBook(){
    var val = {
    bookId : this.bookId,
    bookName : this.bookName,
    isbn : this.isbn,
    description : this.description,
    publisher : this.publisher,
    author : this.author,
    location : this.location,
    quantity : this.quantity,
    issued : this.issued,
    bookIssuedId : this.bookIssuedId
    }
    this.service.addBook(val).subscribe(res=>{
      alert(res.toString());
    })
  }

  updateBook(){
    var val = {
      bookId : this.bookId,
      bookName : this.bookName,
      isbn : this.isbn,
      description : this.description,
      publisher : this.publisher,
      author : this.author,
      location : this.location,
      quantity : this.quantity,
      issued : this.issued,
      bookIssuedId : this.bookIssuedId
      }
      this.service.updateBook(val).subscribe(res=>{
        alert(res.toString());
      })
  }

}
