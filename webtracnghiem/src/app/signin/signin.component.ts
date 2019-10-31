import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userlogin: any;
  alluser: any;
  users: any;
  email: string;
  password: string;
  constructor(public auth: AuthService, private router: Router) {
    // this.userlogin=JSON.parse(localStorage.getItem('userlogin'));
    this.alluser= this.auth.alluserRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.val();
        const id = a.payload.key;
        // console.log({id, ...data})
        return { id, ...data };
      }))
    ).subscribe(data =>{ this.users= data});
    
  }
  login(email, password){
    for(var i=0; i<this.users.length; i++){
      if(email == this.users[i].email && password == this.users[i].password){
        // this.auth.userlogin= this.users[i];
        localStorage.setItem('userlogin', JSON.stringify(this.users[i]));
        console.log("Login success");
        this.router.navigate(['/dashboard']);
        // location.reload();
        return;
      }
      else{
        console.log("Login failed");
        this.router.navigate(['/signup']);
      }
    }
    // this.auth.Login(this.email, this.password);
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
