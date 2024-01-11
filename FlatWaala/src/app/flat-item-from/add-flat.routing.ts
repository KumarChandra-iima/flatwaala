import { Route, Router, RouterModule, Routes } from "@angular/router";
import { FlatItemFormComponent } from "./flat-item-form.component";

const addFlatRoutes:Routes=[
    {path:'add', component:FlatItemFormComponent}
];

export const addFlatRouting = RouterModule.forChild(addFlatRoutes);