import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import {FlatItemService} from "../flat-item/flat-item.service"
import { lookupListsToken } from '../app.providers';
import { Router } from '@angular/router';

@Component({
  selector: 'fw-flat-item-form',
  templateUrl: './flat-item-form.component.html',
  styleUrls: ['./flat-item-form.component.css']
})
export class FlatItemFormComponent implements OnInit{
    form: FormGroup | any;
    constructor(private formBuilder: FormBuilder,
        private flatItemService: FlatItemService,
        @Inject(lookupListsToken) public lookupLists: any,
        private router:Router
        ){}
    ngOnInit(): void {
        this.form=this.formBuilder.group({
            type: this.formBuilder.control('2bhk'),
            name: this.formBuilder.control('',Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            developer: this.formBuilder.control(''),
            
            completionYear: this.formBuilder.control<any>('',this.yearValidator),
        });
    }

    yearValidator(control: AbstractControl) {
        if (control.value.trim().length === 0) {
          return null;
        }
        const year = parseInt(control.value, 10);
        const minYear = 1900;
        const maxYear = 2030;
        if (year >= minYear && year <= maxYear) {
          return null;
        } else {
            return{  completionYear: 
                    {
                        min: minYear,
                        max: maxYear
                    } 
                };
            }
            
        }

        onSubmit(flatItem:any){
            console.log(flatItem);
            this.flatItemService.add(flatItem)
            .subscribe(()=>{
                this.router.navigate(['/',flatItem.type]);
            });
        }
}