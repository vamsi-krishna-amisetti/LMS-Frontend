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
}
