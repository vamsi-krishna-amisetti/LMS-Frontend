import { Component, TemplateRef, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-ebook',
  templateUrl: './view-ebook.component.html',
  styleUrls: ['./view-ebook.component.css']
})
export class ViewEbookComponent implements OnInit {
  
  modalRef: BsModalRef = new BsModalRef;
  constructor(public modalService: BsModalService, private service: SharedService) { }

  EBookList: any = [];
  ModalTitle: string = "";
  ActivateAddEditEBookComp: boolean = true;
  ebook: any;

  ngOnInit(): void {
    this.refreshEBookList();
  }

  addClick(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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

  editClick(template: TemplateRef<any>, item: any) {
    this.modalRef = this.modalService.show(template);
    this.ebook = item;
    this.ModalTitle = "Update EBook"
    this.ActivateAddEditEBookComp = true;
  }

  closeClick() {
    this.ActivateAddEditEBookComp = false;
    this.refreshEBookList();
  }

  deleteItem(item: any) {
    if (confirm('Are you sure, you want to delete?')) {
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
