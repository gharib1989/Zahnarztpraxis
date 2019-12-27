import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PraxisComponent } from './components/praxis/praxis.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { LeistungenComponent } from './components/leistungen/leistungen.component';
import { UberUnsComponent } from './components/uber-uns/uber-uns.component';
import { NeuigkeitenComponent } from './components/neuigkeiten/neuigkeiten.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { AdminComponent } from './components/admin/admin.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: PraxisComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'leistung/:id', component: LeistungenComponent },
  { path: 'uberUns', component: UberUnsComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  { path: 'Neuigkeiten', component: NeuigkeitenComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
