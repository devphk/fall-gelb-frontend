import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroundtransportComponent } from './new-groundtransport.component';

describe('NewGroundtransportComponent', () => {
  let component: NewGroundtransportComponent;
  let fixture: ComponentFixture<NewGroundtransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGroundtransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGroundtransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
