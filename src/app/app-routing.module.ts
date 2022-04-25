import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EBooksComponent } from './ebooks/ebooks.component';
import { IssuesComponent } from './issues/issues.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { OthersComponent } from './others/others.component';

const routes: Routes = [
  { path : 'books', component : BooksComponent },
  { path : 'dashboard', component : DashboardComponent },
  { path : 'ebooks', component : EBooksComponent },
  { path: 'issues', component : IssuesComponent },
  { path : 'users', component : UsersComponent},
  { path : 'login', component : LoginComponent},
  { path : 'others', component: OthersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
