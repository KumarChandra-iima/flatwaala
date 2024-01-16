import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { farjiData } from '../farji-data';
import { Suchi } from '../types';
import { CommonModule, NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-swa-suchi-patrika',
  standalone:true,
  imports: [FormsModule,NgFor,RouterLink],
  templateUrl: './swa-suchi-patrika.component.html',
  styleUrl: './swa-suchi-patrika.component.css'
})
export class SwaSuchiPatrikaComponent {

  suchi : Suchi[]=[];
  constructor(){}
  ngOnInit(){
    this.suchi = farjiData;
  }

  onDeleteClicked(flatId: string): void{
    alert(`Deleting your listing with id ${flatId}`);
  }
}
