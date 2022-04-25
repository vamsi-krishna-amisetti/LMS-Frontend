import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private service : SharedService) { }
  BooksCount: number = 0;
  IssuesCount: number = 0;
  UsersCount: number = 0;
  EBooksCount: number = 0;
  ngOnInit(): void {
    this.refereshData()
  }

  refereshData(){
    this.service.getBookList().subscribe(data => {
      this.BooksCount = Object.keys(data).length;
    });
    this.service.getEBookList().subscribe(data => {
      this.EBooksCount = Object.keys(data).length;
    });
    this.service.getIssueList().subscribe(data => {
      this.IssuesCount = Object.keys(data).length;
    });
    this.service.getStudentList().subscribe(data => {
      this.UsersCount = Object.keys(data).length;
    });
  }

}
