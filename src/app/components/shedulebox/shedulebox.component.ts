import { Component, OnInit } from '@angular/core';
import { SprechZeit } from '../model/day';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-shedulebox',
  templateUrl: './shedulebox.component.html',
  styleUrls: ['./shedulebox.component.scss']
})
export class SheduleboxComponent implements OnInit {
  public isLoading: boolean = true;
  public sprechZeit: SprechZeit = {
    sat: ['18:30', '18:30', true],
    sun: ['18:30', '18:30', true],
    mon: ['18:30', '18:30', true],
    tus: ['18:30', '18:30', true],
    wed: ['18:30', '18:30', true],
    thu: ['18:30', '18:30', true],
    fri: ['18:30', '18:30', true],
  };
  constructor(private firebaseService: FirebaseService) {}

  public ngOnInit(): void {
    this.firebaseService.getSprechZeit().subscribe((actionArray: DocumentChangeAction<SprechZeit>[]) => {
      this.sprechZeit =
        actionArray.length > 0
          ? ({
              sat: actionArray[actionArray.length - 1].payload.doc.data().sat,
              sun: actionArray[actionArray.length - 1].payload.doc.data().sun,
              mon: actionArray[actionArray.length - 1].payload.doc.data().mon,
              tus: actionArray[actionArray.length - 1].payload.doc.data().tus,
              wed: actionArray[actionArray.length - 1].payload.doc.data().wed,
              thu: actionArray[actionArray.length - 1].payload.doc.data().thu,
              fri: actionArray[actionArray.length - 1].payload.doc.data().fri,
            } as SprechZeit)
          : null;
    });
  }

}
