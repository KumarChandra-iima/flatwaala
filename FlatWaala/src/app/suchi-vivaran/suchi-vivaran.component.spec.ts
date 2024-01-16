import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuchiVivaranComponent } from './suchi-vivaran.component';

describe('SuchiVivaranComponent', () => {
  let component: SuchiVivaranComponent;
  let fixture: ComponentFixture<SuchiVivaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuchiVivaranComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuchiVivaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
