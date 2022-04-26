import { Component, TemplateRef, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})

export class ViewBookComponent implements OnInit {

  modalRef: BsModalRef = new BsModalRef;
  constructor(public modalService: BsModalService, private service: SharedService) { }

  BookList: any = [];
  ModalTitle: string = "";
  ActivateAddEditBookComp: boolean = false;
  book: any;


  ngOnInit(): void {
    this.refreshBookList();
    this.modalService.onHide.subscribe((e) => {
      console.log('close',this.modalService.config.initialState);
  });
  }

  addClick(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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

  editClick(template: TemplateRef<any>, item:any){
    this.modalRef = this.modalService.show(template);
    this.book=item;
    this.ModalTitle="Update Book"
    this.ActivateAddEditBookComp=true;
  }

  closeClick(){
    this.ActivateAddEditBookComp=false;
    this.refreshBookList();
  }

  deleteItem(item:any){
    if(confirm('Are you sure, you want to delete?')){
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
