import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private service: SharedService) { }

  UserList: any = [];
  ModalTitle: string = "";
  ActivateAddEditUserComp: boolean = true;
  user: any;

  ngOnInit(): void {
    this.refreshUserList();
  }

  addClick() {
    this.user = {
      studentId: 0,
      studentName: "",
      stunentEmail: "",
      fatherName: "",
      password: "",
      phone: "",
      address: "",
      class: "",
      rollNo: 0
    }
    this.ModalTitle = "Add User";
    this.ActivateAddEditUserComp = true;
  }

  editClick(item: any) {
    this.user = item;
    this.ModalTitle = "Edit User"
    this.ActivateAddEditUserComp = true;
  }

  closeClick() {
    this.ActivateAddEditUserComp = false;
    this.refreshUserList();
  }

  deleteItem(item: any) {
    if (confirm('Are you sure?')) {
      this.service.deleteStudent(item.studentId).subscribe(data => {
        alert(data.toString());
        this.refreshUserList();
      })
    }
  }

  refreshUserList() {
    this.service.getStudentList().subscribe(data => {
      this.UserList = data;
    });
  }

}
