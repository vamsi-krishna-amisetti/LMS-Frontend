import { Component, TemplateRef,OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  modalRef: BsModalRef = new BsModalRef;
  constructor(public modalService: BsModalService, private service: SharedService) { }

  UserList: any = [];
  ModalTitle: string = "";
  ActivateAddEditUserComp: boolean = true;
  user: any;

  ngOnInit(): void {
    this.refreshUserList();
  }

  addClick(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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

  editClick(template: TemplateRef<any>, item: any) {
    this.modalRef = this.modalService.show(template);
    this.user = item;
    this.ModalTitle = "Update User"
    this.ActivateAddEditUserComp = true;
  }

  closeClick() {
    this.ActivateAddEditUserComp = false;
    this.refreshUserList();
  }

  deleteItem(item: any) {
    if (confirm('Are you sure, you want to delete?')) {
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
