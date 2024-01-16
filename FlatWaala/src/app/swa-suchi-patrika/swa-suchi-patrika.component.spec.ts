import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaSuchiPatrikaComponent } from './swa-suchi-patrika.component';

describe('SwaSuchiPatrikaComponent', () => {
  let component: SwaSuchiPatrikaComponent;
  let fixture: ComponentFixture<SwaSuchiPatrikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwaSuchiPatrikaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwaSuchiPatrikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
