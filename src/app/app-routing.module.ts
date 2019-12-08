import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PraxisComponent } from './components/praxis/praxis.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { LeistungenComponent } from './components/leistungen/leistungen.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: PraxisComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'leistung/:id', component: LeistungenComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
