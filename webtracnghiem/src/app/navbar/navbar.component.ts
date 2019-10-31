import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userlogin: any;
  hiddenbutton: boolean;
  constructor(private auth: AuthService) {
    this.userlogin= JSON.parse(localStorage.getItem('userlogin'));
    
    if(this.userlogin != null){
      this.hiddenbutton=true;
    }
  }

  ngOnInit() {
    
    
  }

}
