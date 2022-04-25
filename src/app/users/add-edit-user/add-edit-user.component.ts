import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() user: any;
  studentId: number = 0;
  studentName: string = "";
  stunentEmail: string = "";
  fatherName: string = "";
  password: string = "";
  phone: string = "";
  address: string = "";
  class: string = "";
  rollNo: number = 0;

  ngOnInit(): void {
    this.studentId = this.user.studentId
    this.studentName = this.user.studentName
    this.stunentEmail = this.user.stunentEmail
    this.fatherName = this.user.fatherName
    this.password = this.user.password
    this.phone = this.user.phone
    this.address = this.user.address
    this.class = this.user.class
    this.rollNo = this.user.rollNo
  }

  addUser() {
    var val = {
      studentId: this.studentId,
      studentName: this.studentName,
      stunentEmail: this.stunentEmail,
      fatherName: this.fatherName,
      password: this.password,
      phone: this.phone,
      address: this.address,
      class: this.class,
      rollNo: this.rollNo
    }
    this.service.addStudent(val).subscribe(res => {
      alert(res.toString());
    })
  }

  updateUser() {
    var val = {
      studentId: this.studentId,
      studentName: this.studentName,
      stunentEmail: this.stunentEmail,
      fatherName: this.fatherName,
      password: this.password,
      phone: this.phone,
      address: this.address,
      class: this.class,
      rollNo: this.rollNo
    }
    this.service.updateStudent(val).subscribe(res => {
      alert(res.toString());
    })
  }

}
