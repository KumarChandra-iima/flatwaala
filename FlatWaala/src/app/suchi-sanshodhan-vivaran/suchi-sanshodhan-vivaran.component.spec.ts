import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuchiSanshodhanVivaranComponent } from './suchi-sanshodhan-vivaran.component';

describe('SuchiSanshodhanVivaranComponent', () => {
  let component: SuchiSanshodhanVivaranComponent;
  let fixture: ComponentFixture<SuchiSanshodhanVivaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuchiSanshodhanVivaranComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuchiSanshodhanVivaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
