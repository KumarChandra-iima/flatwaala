
import { FlatItemListComponent } from "./flat-item-list/flat-item-list.component";
import { AuthGuardService } from "./auth-guard-service";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuchiPatrikaComponent } from './suchi-patrika/suchi-patrika.component';
import { SuchiVivaranComponent } from './suchi-vivaran/suchi-vivaran.component';
import { SamparkPatrikaComponent } from './sampark-patrika/sampark-patrika.component';
import { SwaSuchiPatrikaComponent } from './swa-suchi-patrika/swa-suchi-patrika.component';
import { SuchiSanshodhanPatrikaComponent } from './suchi-sanshodhan-patrika/suchi-sanshodhan-patrika.component';
import { NavinSuchiPatrikaComponent } from './navin-suchi-patrika/navin-suchi-patrika.component';

const appRoutes: Routes = [
    {path:"", redirectTo:"/suchi", pathMatch:"full"},
  {path:"suchi", component: SuchiPatrikaComponent, pathMatch:"full"},
  {path:"suchi/:id", component: SuchiVivaranComponent, },
  {path:"sampark/:id", component: SamparkPatrikaComponent, },
  {path:"suchi-sanshodhan/:id", component: SuchiSanshodhanPatrikaComponent},
  {path:"swasuchi", component: SwaSuchiPatrikaComponent, },
  {path:"navin-suchi", component: NavinSuchiPatrikaComponent, },
    {
        path: 'add',
        loadChildren: ()=>import('./flat-item-from/add-flat.module').then(m=>m.AddFlatModule)
    },
    {path: ':type', component:FlatItemListComponent},
    {path: 'suchi', component:SuchiPatrikaComponent},
    {path: 'suchi/:id', component:SuchiPatrikaComponent},
    {path: '' 
            , redirectTo:'all'
            , pathMatch: 'full'
            //, canActivate:[AuthGuardService]
    },
];
export const routing = RouterModule.forRoot(appRoutes); 