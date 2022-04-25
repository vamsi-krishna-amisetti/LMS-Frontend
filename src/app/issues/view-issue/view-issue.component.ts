import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.css']
})
export class ViewIssueComponent implements OnInit {

  constructor(private service: SharedService) { }

  IssueList: any = [];
  ModalTitle: string = "";
  ActivateAddEditIssueComp: boolean = true;
  issue: any;

  ngOnInit(): void {
    this.refreshIssueList();
  }

  addClick() {
    this.issue = {
      issueId: 0,
      studentId: 0,
      bookId: 0,
      message: ""
    }
    this.ModalTitle = "Issue New Book";
    this.ActivateAddEditIssueComp = true;
  }

  editClick(item: any) {
    this.issue = item;
    this.ModalTitle = "Edit Issue"
    this.ActivateAddEditIssueComp = true;
  }

  closeClick() {
    this.ActivateAddEditIssueComp = false;
    this.refreshIssueList();
  }

  deleteItem(item: any) {
    if (confirm('Are you sure?')) {
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
