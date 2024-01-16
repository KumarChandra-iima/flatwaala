import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuchiPatrikaComponent } from './suchi-patrika/suchi-patrika.component';
import { SuchiVivaranComponent } from './suchi-vivaran/suchi-vivaran.component';
import { SamparkPatrikaComponent } from './sampark-patrika/sampark-patrika.component';
import { SwaSuchiPatrikaComponent } from './swa-suchi-patrika/swa-suchi-patrika.component';
import { SuchiSanshodhanPatrikaComponent } from './suchi-sanshodhan-patrika/suchi-sanshodhan-patrika.component';
import { NavinSuchiPatrikaComponent } from './navin-suchi-patrika/navin-suchi-patrika.component';

const routes: Routes = [
  {path:"", redirectTo:"/suchi", pathMatch:"full"},
  {path:"suchi", component: SuchiPatrikaComponent, pathMatch:"full"},
  {path:"suchi/:id", component: SuchiVivaranComponent, },
  {path:"sampark", component: SamparkPatrikaComponent, },
  {path:"suchi-sanshodhan", component: SuchiSanshodhanPatrikaComponent},
  {path:"swasuchi", component: SwaSuchiPatrikaComponent, },
  {path:"navin-suchi", component: NavinSuchiPatrikaComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
