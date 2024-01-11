import { Routes, RouterModule } from "@angular/router";
import { FlatItemListComponent } from "./flat-item-list/flat-item-list.component";
import { AuthGuardService } from "./auth-guard-service";
const appRoutes: Routes = [
    {
        path: 'add',
        loadChildren: ()=>import('./flat-item-from/add-flat.module').then(m=>m.AddFlatModule)
    },
    {path: ':type', component:FlatItemListComponent},
    {path: '' 
            , redirectTo:'all'
            , pathMatch: 'full'
            //, canActivate:[AuthGuardService]
    },
];
export const routing = RouterModule.forRoot(appRoutes); 