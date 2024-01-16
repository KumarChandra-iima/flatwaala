import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavinSuchiPatrikaComponent } from './navin-suchi-patrika.component';

describe('NavinSuchiPatrikaComponent', () => {
  let component: NavinSuchiPatrikaComponent;
  let fixture: ComponentFixture<NavinSuchiPatrikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavinSuchiPatrikaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavinSuchiPatrikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
