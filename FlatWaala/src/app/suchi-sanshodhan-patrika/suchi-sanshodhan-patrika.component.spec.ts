import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuchiSanshodhanPatrikaComponent } from './suchi-sanshodhan-patrika.component';

describe('SuchiSanshodhanPatrikaComponent', () => {
  let component: SuchiSanshodhanPatrikaComponent;
  let fixture: ComponentFixture<SuchiSanshodhanPatrikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuchiSanshodhanPatrikaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuchiSanshodhanPatrikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
