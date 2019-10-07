import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router'
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
  constructor(
    public auth: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
    this.userlogin=this.auth.userlogin;

  }
  editstd(){
    this.edit=!this.edit;
  }
  logout(){
    this.auth.Logout();
    this.router.navigate(['signin']);
  }
  // updateStudent(key){
  //   console.log(key);
  //   const newinfo=Object.assign(this.userlogin);
  //   this.auth.UpdateInfo(key, newinfo);
  // }
}