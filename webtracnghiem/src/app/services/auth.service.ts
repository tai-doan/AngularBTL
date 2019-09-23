import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Students } from './students';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  studentsCollection: AngularFirestoreCollection<Students>;
  students: Observable<Students[]>;
  userlogin: any;
  constructor(public afs: AngularFirestore) {
    // get data from Student collection
    this.students=afs.collection('Students').valueChanges();
  }
  // function get Students
  getStudents(){
    return this.students;
  }
  // get user login
  getUser(){
    return this.userlogin;
  }
  // logout
  logout(){
    this.userlogin=[];
    return this.userlogin;
  }
}
