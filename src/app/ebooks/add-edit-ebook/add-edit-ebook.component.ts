import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-ebook',
  templateUrl: './add-edit-ebook.component.html',
  styleUrls: ['./add-edit-ebook.component.css']
})
export class AddEditEbookComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() ebook: any;
  eBookId: number = 0;
  eBookName: string = "";
  isbn: string = "";
  description: string = "";
  publisher: string = "";
  author: string = ""

  ngOnInit(): void {
    this.eBookId = this.ebook.eBookId
    this.eBookName = this.ebook.eBookName
    this.isbn = this.ebook.isbn
    this.description = this.ebook.description
    this.publisher = this.ebook.publisher
    this.author = this.ebook.author
  }

  addEBook(){
    var val = {
      eBookId : this.eBookId,
      eBookName : this.eBookName,
      isbn : this.isbn,
      description : this.description,
      publisher : this.publisher,
      author : this.author
    }
    this.service.addEBook(val).subscribe(res=>{
      alert(res.toString());
    })
  }

  updateEBook(){
    var val = {
      eBookId : this.eBookId,
      eBookName : this.eBookName,
      isbn : this.isbn,
      description : this.description,
      publisher : this.publisher,
      author : this.author
      }
      this.service.updateEBook(val).subscribe(res=>{
        alert(res.toString());
      })
  }

}
