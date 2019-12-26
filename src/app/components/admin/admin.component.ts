import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { News } from '../model/news';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { SprechZeit } from '../model/day';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public loading: boolean = true;
  public news: News;
  public sprechZeit: SprechZeit = {
    sat: ['18:30', '18:30'],
    sun: ['18:30', '18:30'],
    mon: ['18:30', '18:30'],
    tus: ['18:30', '18:30'],
    wed: ['18:30', '18:30'],
    thu: ['18:30', '18:30'],
    fri: ['18:30', '18:30'],
  };
  constructor(private firebaseService: FirebaseService, private atp: AmazingTimePickerService) {}
  public updateMessage(): void {
    this.firebaseService.UpdateMessage(this.news);
  }
  public updateSprechZeiten(): void {
    this.firebaseService.UpdateSprechZeit(this.sprechZeit);
  }
  public open(index: string): void {
    const amazingTimePicker = this.atp.open({
      locale: 'de',
      theme: 'material-green',
    });
    amazingTimePicker.afterClose().subscribe(time => {
      switch (index) {
        case 'sat-from': {
          this.sprechZeit.sat[0] = time;
          break;
        }
        case 'sat-to': {
          this.sprechZeit.sat[1] = time;
          break;
        }
        case 'sun-from': {
          this.sprechZeit.sun[0] = time;
          break;
        }
        case 'sun-to': {
          this.sprechZeit.sun[1] = time;
          break;
        }
        case 'mon-from': {
          this.sprechZeit.mon[0] = time;
          break;
        }
        case 'mon-to': {
          this.sprechZeit.mon[1] = time;
          break;
        }
        case 'tus-from': {
          this.sprechZeit.tus[0] = time;
          break;
        }
        case 'tus-to': {
          this.sprechZeit.tus[1] = time;
          break;
        }
        case 'wed-from': {
          this.sprechZeit.wed[0] = time;
          break;
        }
        case 'wed-to': {
          this.sprechZeit.wed[1] = time;
          break;
        }
        case 'thu-from': {
          this.sprechZeit.thu[0] = time;
          break;
        }
        case 'thu-to': {
          this.sprechZeit.thu[1] = time;
          break;
        }
        case 'fri-from': {
          this.sprechZeit.fri[0] = time;
          break;
        }
        case 'fri-to': {
          this.sprechZeit.fri[1] = time;
          break;
        }
        default: {
          //statements;
          break;
        }
      }
    });
  }
  public ngOnInit(): void {
    this.firebaseService.getNews().subscribe((actionArray: DocumentChangeAction<News>[]) => {
      this.news =
        actionArray.length > 0
          ? ({
              id: actionArray[actionArray.length - 1].payload.doc.id,
              text: actionArray[actionArray.length - 1].payload.doc.data().text,
            } as News)
          : null;
      this.loading = false;
    });
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
