import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamparkPatrikaComponent } from './sampark-patrika.component';

describe('SamparkPatrikaComponent', () => {
  let component: SamparkPatrikaComponent;
  let fixture: ComponentFixture<SamparkPatrikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamparkPatrikaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SamparkPatrikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
