import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Students } from '../services/students';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userlogin: any;
  userinfo: any;
  students: Students[];
  constructor(private Aut: AuthService) { }

  ngOnInit() {
    // gán mảng chứa user đã login vào userlogin
    this.userlogin=this.Aut.userlogin;
    // get all students from firebase
    this.Aut.getStudents().subscribe(stds => {
      this.students=stds;
      console.log(stds);
    });

    // for(var i=0; i<this.students.length; i++){
    //   if(this.students[i].username==this.userlogin.fullname){
    //     this.userinfo=this.students[i];
    //   }
    // }
    // console.log(this.userinfo)
  }
  updateStudent(student){
    this.Aut.updateStudent(student);
  }
}
