import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  quizRef: AngularFireObject<any>;
  quiz: Observable<any[]>;

  public quizs: any;
  nameofsubject=null;
  constructor( private db: AngularFireDatabase ){

  }
  GetQuiz(){
    this.quizRef = this.db.object(`Quizs/${this.nameofsubject}`);
      this.quiz = this.quizRef.valueChanges();
      this.quizRef.valueChanges().subscribe(data => {
        this.quizs= data;
        // console.log("service trong gan:",this.quizs);
      });
      // console.log("service ngoai:",this.quizs);
  }

}
