import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  constructor(private service: SharedService) { }

  BookList: any = [];
  ModalTitle: string = "";
  ActivateAddEditBookComp: boolean = true;
  book: any;


  ngOnInit(): void {
    this.refreshBookList();
  }

  addClick() {
    this.book = {
      bookId: 0,
      bookName: "",
      isbn: "",
      description: "",
      publisher: "",
      author: "",
      location: "",
      quantity: "",
      issued: "",
      bookIssuedId: "",
    }
    this.ModalTitle="Add Book";
    this.ActivateAddEditBookComp=true;
  }

  editClick(item:any){
    this.book=item;
    this.ModalTitle="Edit Book"
    this.ActivateAddEditBookComp=true;
  }

  closeClick(){
    this.ActivateAddEditBookComp=false;
    this.refreshBookList();
  }

  deleteItem(item:any){
    if(confirm('Are you sure?')){
      this.service.deleteBook(item.bookId).subscribe(data=>{
        alert(data.toString());
        this.refreshBookList();
      })
    }
  }

  refreshBookList() {
    this.service.getBookList().subscribe(data => {
      this.BookList = data;
    });
  }

}
