import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Students } from '../services/students';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  students: Students[];
  userlogin: any;
  email: string;
  pw: string;
  constructor(private Aut: AuthService) { }

  ngOnInit() {
    // get items
    this.Aut.getStudents().subscribe(stds => {
      this.students=stds;
    });
  }
  login(email, pw) {
    for(var i=0; i<this.students.length; i++){
      if(email==this.students[i].email && pw==this.students[i].password){
        this.userlogin=this.students[i];
        this.Aut.userlogin=this.userlogin;
      }
    }
    console.log(this.Aut.userlogin);
  }
  // login(email, pw){
  //   this.Aut.login(email, pw);
  // }
}
