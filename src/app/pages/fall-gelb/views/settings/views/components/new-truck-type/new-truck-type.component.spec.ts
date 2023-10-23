import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTruckTypeComponent } from './new-truck-type.component';

describe('NewTruckTypeComponent', () => {
  let component: NewTruckTypeComponent;
  let fixture: ComponentFixture<NewTruckTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTruckTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTruckTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
