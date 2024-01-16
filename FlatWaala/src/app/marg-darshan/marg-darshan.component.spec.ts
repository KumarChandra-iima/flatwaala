import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargDarshanComponent } from './marg-darshan.component';

describe('MargDarshanComponent', () => {
  let component: MargDarshanComponent;
  let fixture: ComponentFixture<MargDarshanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MargDarshanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MargDarshanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
