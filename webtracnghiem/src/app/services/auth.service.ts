import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  alluserRef: AngularFireList<any>;
  alluser: Observable<any[]>;
  yourpw;
  private user: any;
  public userlogin: any;
  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ){
    // this.userlogin= JSON.parse(localStorage.getItem('userlogin'));
    // console.log(this.userlogin);
    this.alluserRef = this.db.list('Students');
    this.alluser = this.alluserRef.valueChanges();
    this.alluserRef.valueChanges().subscribe(data => {
      this.user= data;
      // console.log(data);
    });
  }
  ResetPassword(email){
    for(var i=0; i< this.user.length; i++){
      if(email == this.user[i].email){
        this.yourpw= this.user[i].password;
      }
    }
  }
  UpdateInfo(key, info){
    info= Object.assign(info);
    this.alluserRef.update(key, info);
  }
  UpdateMarks(key, mark){
    this.alluserRef.update(key, mark);
  }
  Signup(email, password, fullname, username, birthday, gender, marks, schoolfee){
    this.alluserRef.push({
      "email" : email,
      "password" : password,
      "fullname" : fullname,
      "username" : username,
      "birthday" : birthday,
      "gender" : gender,
      "marks" : marks,
      "schoolfee" : schoolfee
    });
    this.router.navigate(['/signin']);
  }
  Logout(){
    localStorage.removeItem('userlogin');
    // location.reload();
  }
}