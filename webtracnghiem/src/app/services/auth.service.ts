import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Students } from './students';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  studentsCollection: AngularFirestoreCollection<Students>;
  students: Observable <Students[]>;
  studentsDoc: AngularFirestoreDocument<Students>;
  userlogin: any;
  constructor(public afs: AngularFirestore) {
    // get data from Student collection
    // this.students=afs.collection('Students').valueChanges();
    this.students=this.afs.collection('Students').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Students;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
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
  updateStudent(student: Students){
    this.studentsDoc=this.afs.doc(`Students/${student.id}`);
    this.studentsDoc.update(student);
  }
}
