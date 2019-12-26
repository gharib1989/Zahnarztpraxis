import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { News } from '../components/model/news';
import { User } from '../shared/services/user';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SprechZeit } from '../components/model/day';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  public newsRef: AngularFireList<News>;
  constructor(private firestore: AngularFirestore) {} // Inject AngularFireDatabase dependency in constructor

  // Create User
  public getNews(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('news').snapshotChanges();
  }
  // Create User
  public getSprechZeit(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('zeit').snapshotChanges();
  }
  public UpdateMessage(news: News): void {
    this.firestore.doc('news/' + news.id).update(news);
  }
  // Update User
  public UpdateSprechZeit(sprechZeit: SprechZeit): void {
    this.firestore.doc('zeit/iM3iXpNk52S0jxiqfCJv').update(sprechZeit);
  }
}
