import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tours: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.tours = firestore.collection('tours').valueChanges();
  }

}
