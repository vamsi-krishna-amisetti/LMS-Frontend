import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { AddEditUserComponent } from './users/add-edit-user/add-edit-user.component';
import { BooksComponent } from './books/books.component';
import { ViewBookComponent } from './books/view-book/view-book.component';
import { AddEditBookComponent } from './books/add-edit-book/add-edit-book.component';
import { EBooksComponent } from './ebooks/ebooks.component';
import { ViewEbookComponent } from './ebooks/view-ebook/view-ebook.component';
import { AddEditEbookComponent } from './ebooks/add-edit-ebook/add-edit-ebook.component';
import { IssuesComponent } from './issues/issues.component';
import { ViewIssueComponent } from './issues/view-issue/view-issue.component';
import { AddEditIssueComponent } from './issues/add-edit-issue/add-edit-issue.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    ViewUserComponent,
    AddEditUserComponent,
    BooksComponent,
    ViewBookComponent,
    AddEditBookComponent,
    EBooksComponent,
    ViewEbookComponent,
    AddEditEbookComponent,
    IssuesComponent,
    ViewIssueComponent,
    AddEditIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
