import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  alluser: any;
  email: string;
  password: string;
  constructor(public auth: AuthService) {

  }
  login(){
    this.auth.Login(this.email, this.password);
  }
  ngOnInit(){
    // this.alluser= this.auth.user;
  }

  }


  // students: Students[];
  // email: string;
  // pw: string;
  // constructor(private Aut: AuthService) { }

  // ngOnInit() {
  //   // get all students
  //   this.Aut.getStudents().subscribe(stds => {
  //     this.students=stds;
  //   });
  // }
  // login() {
  //   for(var i=0; i<this.students.length; i++){
  //     if(this.email==this.students[i].email && this.pw==this.students[i].password){
  //       this.Aut.userlogin=this.students[i];
  //     }
  //   }
  //   //console.log(this.Aut.userlogin);
  // }
