import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username= '';
  email= '';
  password= '';
  fullname= '';
  birthday= '';
  gender= true;
  marks= 0;
  schoolfee= 0;
  constructor(public auth: AuthService) { }
  
  Signup(){
    this.auth.Signup(this.email, this.password, this.fullname, this.username, this.birthday, this.gender, this.marks, this.schoolfee);
  }
  ngOnInit() {
  }

}
