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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
