import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view-ebook',
  templateUrl: './view-ebook.component.html',
  styleUrls: ['./view-ebook.component.css']
})
export class ViewEbookComponent implements OnInit {

  constructor(private service: SharedService) { }

  EBookList: any = [];
  ModalTitle: string = "";
  ActivateAddEditEBookComp: boolean = true;
  ebook: any;

  ngOnInit(): void {
    this.refreshEBookList();
  }

  addClick() {
    this.ebook = {
      eBookId: 0,
      eBookName: "",
      isbn: "",
      description: "",
      publisher: "",
      author: ""
    }
    this.ModalTitle = "Add EBook";
    this.ActivateAddEditEBookComp = true;
  }

  editClick(item: any) {
    this.ebook = item;
    this.ModalTitle = "Edit EBook"
    this.ActivateAddEditEBookComp = true;
  }

  closeClick() {
    this.ActivateAddEditEBookComp = false;
    this.refreshEBookList();
  }

  deleteItem(item: any) {
    if (confirm('Are you sure?')) {
      this.service.deleteEBook(item.eBookId).subscribe(data => {
        alert(data.toString());
        this.refreshEBookList();
      })
    }
  }

  refreshEBookList() {
    this.service.getEBookList().subscribe(data => {
      this.EBookList = data;
    });
  }

}
