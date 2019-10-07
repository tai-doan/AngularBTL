import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  email: string;
  yourpw;
  constructor(public auth: AuthService) {
  }

  reset(email){
    this.auth.ResetPassword(email);
    setTimeout(() => {
      this.yourpw= this.auth.yourpw;
    }, 1000);
  }
  ngOnInit() {
  }

}
