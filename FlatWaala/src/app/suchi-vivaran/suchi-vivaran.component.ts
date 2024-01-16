import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { farjiData } from '../farji-data';
import { Suchi } from '../types';

@Component({
  selector: 'app-suchi-vivaran',
  templateUrl: './suchi-vivaran.component.html',
  styleUrl: './suchi-vivaran.component.css'
})
export class SuchiVivaranComponent {
  suchi:Suchi|undefined;
  constructor(
    private route : ActivatedRoute
  ) {    
    }

    ngOnInit(): void{
      const id= this.route.snapshot.paramMap.get("id");
      this.suchi=farjiData.find(s=>s.id===id);
    }

  }


