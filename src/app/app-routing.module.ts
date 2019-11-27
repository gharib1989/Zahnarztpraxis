import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PraxisComponent } from './components/praxis/praxis.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: PraxisComponent},
  { path: 'kontakt', component: KontaktComponent},
  { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
