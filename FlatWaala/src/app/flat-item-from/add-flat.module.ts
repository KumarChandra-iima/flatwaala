import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FlatItemFormComponent } from "./flat-item-form.component";
import { addFlatRouting } from "./add-flat.routing";
@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        addFlatRouting
    ],
    declarations:[
        FlatItemFormComponent
    ],
})
export class AddFlatModule{}
