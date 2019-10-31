import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userlogin: any;
  edit= false;
  constructor(
    public auth: AuthService,
    public router: Router
  ) {
    this.userlogin= JSON.parse(localStorage.getItem('userlogin'));
    if(this.userlogin == null){
      this.router.navigate(['/signin']);
    }
  }

  ngOnInit() {
  }
  updateStudent(key){
    this.auth.UpdateInfo(key,this.userlogin);
    this.editstd();
  }
  editstd(){
    this.edit=!this.edit;
  }
  logout(){
    this.auth.Logout();
    this.router.navigate(['signin']);
  }
}