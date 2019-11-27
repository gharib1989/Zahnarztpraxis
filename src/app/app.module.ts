import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
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
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
