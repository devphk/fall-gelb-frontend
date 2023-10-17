import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAirlineComponent } from './new-airline.component';

describe('NewAirlineComponent', () => {
  let component: NewAirlineComponent;
  let fixture: ComponentFixture<NewAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAirlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
