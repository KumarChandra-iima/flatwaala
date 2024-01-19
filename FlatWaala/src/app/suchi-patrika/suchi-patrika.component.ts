import { CommonModule, NgFor, NgIf, NgOptimizedImage,  } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { Suchi } from '../types';
import { farjiData } from '../farji-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-suchi-patrika',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './suchi-patrika.component.html',

//   template:`
// <div *ngFor="let flats in suchi">
// <a href="/suchi/{{flats.id}}" >
//             <!-- <h3>{{flat.projName}} - ${{flat.price}}</h3> -->
//         </a>
// </div>
//     `,
  styleUrl: './suchi-patrika.component.css'
})
export class SuchiPatrikaComponent implements OnInit{
  constructor(
    private suchiSeva: ListingsService
  ) {}
  suchi: Suchi[]=[];
  // flat: Suchi = {id:'1', area:'234', price:23423,projName:'2314', sqft:342 };

  ngOnInit():void{
    this.suchi = this.suchiSeva.getListings();
    // this.flat= this.suchi[0];
  }
}
