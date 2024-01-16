import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suchi } from '../types';
import { farjiData } from '../farji-data';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sampark-patrika',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sampark-patrika.component.html',
  styleUrl: './sampark-patrika.component.css'
})
export class SamparkPatrikaComponent {
  email: string='';
  message: string = '';
  suchi: Suchi|undefined;
  // router: Route ;
  constructor(
    private route:ActivatedRoute,
    private router:Router
  ){
    // this.router = routerI;
  }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get("id");
    this.suchi = farjiData.find(s=>s.id===id);
    this.message = `Hey, I am interested in your ${this.suchi?.projName.toLowerCase()}!`;
  }

  sendMessage(): void{
    alert('Your message has been sent!');
    this.router.navigateByUrl('/suchi');
  }
}
