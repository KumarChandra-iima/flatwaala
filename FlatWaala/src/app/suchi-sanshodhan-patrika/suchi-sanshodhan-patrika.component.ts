import { Component, OnInit } from '@angular/core';
import { SuchiSanshodhanVivaranComponent } from '../suchi-sanshodhan-vivaran/suchi-sanshodhan-vivaran.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Suchi } from '../types';
import { farjiData } from '../farji-data';

@Component({
  selector: 'app-suchi-sanshodhan-patrika',
  standalone: true,
  imports: [SuchiSanshodhanVivaranComponent, FormsModule],
  templateUrl: './suchi-sanshodhan-patrika.component.html',
  styleUrl: './suchi-sanshodhan-patrika.component.css'
})
export class SuchiSanshodhanPatrikaComponent {
  suchi:Suchi|undefined;
  // suchi: Suchi = {
  //   area:'',
  //   id:'',
  //   price:0,
  //   projName:'',
  //   sqft:0
  // };
  constructor(private route:ActivatedRoute, private router: Router){}
  ngOnInit():void{
    const id=this.route.snapshot.paramMap.get('id');
    this.suchi = farjiData.find(s=>s.id===id)!;
  }
  onSubmit(): void{
        alert('Saving changes to the listing....');
        this.router.navigateByUrl('/swasuchi');
    }
}
