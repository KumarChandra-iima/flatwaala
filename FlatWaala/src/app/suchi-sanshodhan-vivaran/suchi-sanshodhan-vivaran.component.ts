import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Suchi } from '../types';

@Component({
  selector: 'app-suchi-sanshodhan-vivaran',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './suchi-sanshodhan-vivaran.component.html',
  styleUrl: './suchi-sanshodhan-vivaran.component.css'
})
export class SuchiSanshodhanVivaranComponent {
  @Input() buttonText='';
  @Input() currentProjectName='';
  @Input() currentArea='';
  @Input() currentPrice='';
  @Input() currentSqft='';
  projName: string='';
  area: string='';
  sqft: string='';
  price: string='';

  @Output() onSubmit = new EventEmitter<Suchi>();
  constructor(private router: Router){}
  
  ngOnInit():void{
    this.projName=this.currentProjectName;
    this.area=this.currentArea;
    this.price=this.currentPrice;
    this.sqft=this.currentSqft;
  }
  onButtonClicked():void{
    let emitObj:Suchi= {
      id: '',
      area:this.area,
      price: Number(this.price),
      projName: this.projName,
      sqft: Number(this.sqft),
      views:0
    };
    console.log(emitObj);
    this.onSubmit.emit(emitObj);
  }
}
