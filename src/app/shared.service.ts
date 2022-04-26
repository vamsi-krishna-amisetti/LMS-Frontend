import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44312";

  constructor(private http:HttpClient) { }

  getBookList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Book')
  }
  getBook(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/Book',val);
  }
  addBook(val:any){
    return this.http.post(this.APIUrl+'/Book',val)
  }
  updateBook(val:any){
    return this.http.put(this.APIUrl+'/Book',val)
  }
  deleteBook(val:any){
    return this.http.delete(this.APIUrl+'/Book/'+val.toString())
  }
  getEBookList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EBook')
  }
  getEBook(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/EBook',val);
  }
  addEBook(val:any){
    return this.http.post(this.APIUrl+'/EBook',val)
  }
  updateEBook(val:any){
    return this.http.put(this.APIUrl+'/EBook',val)
  }
  deleteEBook(val:any){
    return this.http.delete(this.APIUrl+'/EBook/'+val.toString())
  }
  getFacultyList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Faculty')
  }
  getFaculty(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/Faculty',val);
  }
  addFaculty(val:any){
    return this.http.post(this.APIUrl+'/Faculty',val)
  }
  updateFaculty(val:any){
    return this.http.put(this.APIUrl+'/Faculty',val)
  }
  deleteFaculty(val:any){
    return this.http.delete(this.APIUrl+'/Faculty/'+val.toString())
  }
  getStudentList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Student')
  }
  getStudent(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/Student',val);
  }
  addStudent(val:any){
    return this.http.post(this.APIUrl+'/Student',val)
  }
  updateStudent(val:any){
    return this.http.put(this.APIUrl+'/Student',val)
  }
  deleteStudent(val:any){
    return this.http.delete(this.APIUrl+'/Student/'+val.toString())
  }
  getIssueList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Issue')
  }
  getIssue(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/Issue',val);
  }
  addIssue(val:any){
    return this.http.post(this.APIUrl+'/Issue',val)
  }
  updateIssue(val:any){
    return this.http.put(this.APIUrl+'/Issue',val)
  }
  deleteIssue(val:any){
    return this.http.delete(this.APIUrl+'/Issue/'+val.toString())
  }
}
