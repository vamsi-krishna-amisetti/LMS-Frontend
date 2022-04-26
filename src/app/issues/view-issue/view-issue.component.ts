import { Component, TemplateRef, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.css']
})
export class ViewIssueComponent implements OnInit {

  modalRef: BsModalRef = new BsModalRef;
  constructor(public modalService: BsModalService, private service: SharedService) { }

  IssueList: any = [];
  ModalTitle: string = "";
  ActivateAddEditIssueComp: boolean = true;
  issue: any;

  ngOnInit(): void {
    this.refreshIssueList();
  }

  addClick(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.issue = {
      issueId: 0,
      studentId: 0,
      bookId: 0,
      message: ""
    }
    this.ModalTitle = "Issue New Book";
    this.ActivateAddEditIssueComp = true;
  }

  editClick(template: TemplateRef<any>, item: any) {
    this.modalRef = this.modalService.show(template);
    this.issue = item;
    this.ModalTitle = "Update Issue"
    this.ActivateAddEditIssueComp = true;
  }

  closeClick() {
    this.ActivateAddEditIssueComp = false;
    this.refreshIssueList();
  }

  deleteItem(item: any) {
    if (confirm('Are you sure, you want to return this book?')) {
      this.service.deleteIssue(item.issueId).subscribe(data => {
        alert(data.toString());
        this.refreshIssueList();
      })
    }
  }

  refreshIssueList() {
    this.service.getIssueList().subscribe(data => {
      this.IssueList = data;
    });
  }

}
