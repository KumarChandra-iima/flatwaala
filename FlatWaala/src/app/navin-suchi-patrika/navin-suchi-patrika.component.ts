import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SuchiSanshodhanVivaranComponent } from '../suchi-sanshodhan-vivaran/suchi-sanshodhan-vivaran.component';
@Component({
  selector: 'app-navin-suchi-patrika',
  standalone: true,
  imports: [FormsModule, RouterLink, SuchiSanshodhanVivaranComponent],
  templateUrl: './navin-suchi-patrika.component.html',
  styleUrl: './navin-suchi-patrika.component.css'
})
export class NavinSuchiPatrikaComponent {



  constructor(private router: Router){}
  ngOnInit():void{}
  onSubmit():void{
    alert('Creating a new lising');
    this.router.navigateByUrl('/swasuchi');
  }
}
