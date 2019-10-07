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
    this.alluserRef = this.db.list('Students');
    this.alluser = this.alluserRef.valueChanges();
    this.alluserRef.valueChanges().subscribe(data => {
      this.user= data;
    });
  }
  ResetPassword(email){
    for(var i=0; i< this.user.length; i++){
      if(email == this.user[i].email){
        this.yourpw= this.user[i].password;
      }
    }
  }
  // UpdateInfo(key, info){
  //   this.alluserRef.update(key, info);
  // }
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
  Login(email, password){
    for(var i=0; i<this.user.length; i++){
      if(email == this.user[i].email && password == this.user[i].password){
        this.userlogin= this.user[i];
        console.log("Login success");
        this.router.navigate(['/dashboard']);
        return;
      }
      else{
        console.log("Login failed");
        this.router.navigate(['/signup']);
      }
    }
  }
  Logout(){
    this.userlogin=null;
  }

  //-------------------------------------------------------------------------------------------/
  // studentsCollection: AngularFirestoreCollection<Students>;
  // students: Observable <Students[]>;
  // studentsDoc: AngularFirestoreDocument<Students>;
  // userlogin: any;
  // constructor(public afs: AngularFirestore) {
  //   // get data from Student collection
  //   // this.students=afs.collection('Students').valueChanges();
  //   this.students=this.afs.collection('Students').snapshotChanges().pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as Students;
  //       data.id = a.payload.doc.id;
  //       return data;
  //     }))
  //   );
  // }
  // // function get Students
  // getStudents(){
  //   return this.students;
  // }
  // // get user login
  // getUser(){
  //   return this.userlogin;
  // }
  // // logout
  // logout(){
  //   this.userlogin=[];
  //   return this.userlogin;
  // }
  // updateStudent(student: Students){
  //   this.studentsDoc=this.afs.doc(`Students/${student.id}`);
  //   this.studentsDoc.update(student);
  // }
}