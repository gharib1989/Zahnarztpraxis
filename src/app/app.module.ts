import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
} from '@angular/material';
import { FooterComponent } from './components/footer/footer.component';
import { PraxisComponent } from './components/praxis/praxis.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { SheduleboxComponent } from './components/shedulebox/shedulebox.component';
import { MedicalServicesComponent } from './components/medical-services/medical-services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuiklinksComponent } from './components/footer/quiklinks/quiklinks.component';
import { LogoComponent } from './components/logo/logo.component';
import { AgmCoreModule } from '@agm/core';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { LeistungenComponent } from './components/leistungen/leistungen.component';
import { SubPageContentComponent } from './components/sub-page-content/sub-page-content.component';
import { SubPageTapContentComponent } from './components/sub-page-tap-content/sub-page-tap-content.component';
import { MatTabsModule } from '@angular/material/tabs';
import { OwlAccordionModule } from 'owl-ng';
import { UberUnsComponent } from './components/uber-uns/uber-uns.component';
import { NeuigkeitenComponent } from './components/neuigkeiten/neuigkeiten.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AdminComponent } from './components/admin/admin.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { FileSizePipe } from './pipe/file-size.pipe';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { DropZoneDirective } from './services/drop-zone.directive';
import { AmazingTimePickerModule } from 'amazing-time-picker';
const firebaseConfig = {
  apiKey: 'AIzaSyCu-ZnSdQMtCD-ElWQLvv8SpP0rk363-Lc',
  authDomain: 'firstexample-fbd17.firebaseapp.com',
  databaseURL: 'https://firstexample-fbd17.firebaseio.com',
  projectId: 'firstexample-fbd17',
  storageBucket: 'firstexample-fbd17.appspot.com',
  messagingSenderId: '306076747812',
  appId: '1:306076747812:web:d7617e186c2405d5f930b1',
  measurementId: 'G-0MN8VNJTXY',
};
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PraxisComponent,
    SeparatorComponent,
    SheduleboxComponent,
    MedicalServicesComponent,
    QuiklinksComponent,
    LogoComponent,
    KontaktComponent,
    LeistungenComponent,
    SubPageContentComponent,
    SubPageTapContentComponent,
    UberUnsComponent,
    NeuigkeitenComponent,
    AdminComponent,
    DropZoneDirective,
    FileSizePipe,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
    OwlAccordionModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgxLoadingModule.forRoot({}),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule,
    AmazingTimePickerModule,
  ],
  providers: [AngularFirestore, AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent],
})
export class AppModule {}
