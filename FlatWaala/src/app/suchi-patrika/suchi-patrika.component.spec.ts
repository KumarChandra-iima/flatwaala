import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuchiPatrikaComponent } from './suchi-patrika.component';

describe('SuchiPatrikaComponent', () => {
  let component: SuchiPatrikaComponent;
  let fixture: ComponentFixture<SuchiPatrikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuchiPatrikaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuchiPatrikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
