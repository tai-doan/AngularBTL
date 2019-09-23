import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Items } from './item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Items>;
  private itemDoc: AngularFirestoreDocument<Items>;
  items: Observable<Items[]>;
  constructor(public afs: AngularFirestore) {
    // get data from Subjects collection
    this.items=afs.collection('Quizs').valueChanges();
  }

  // function get items
  getItems(){
    return this.items;
  }
}
