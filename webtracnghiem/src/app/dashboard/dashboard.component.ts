import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Students } from '../services/students';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userlogin: Students[];
  userinfo: Students[];
  students: Students[];
  edit= false;
  constructor(private Aut: AuthService) { }

  ngOnInit() {
    // gán mảng chứa user đã login vào userlogin
    this.userlogin=this.Aut.getUser();
    
    // get all students from firebase
    this.Aut.getStudents().subscribe(stds => {
      this.students=stds;
      //console.log("std: ",stds);
    });

  }
  editstd(){
    this.edit=!this.edit;
  }
  updateStudent(userlogin){
    // this.Aut.updateStudent(userlogin);
  }
}
