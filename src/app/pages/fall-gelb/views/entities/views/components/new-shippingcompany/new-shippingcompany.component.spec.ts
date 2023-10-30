import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShippingcompanyComponent } from './new-shippingcompany.component';

describe('NewShippingcompanyComponent', () => {
  let component: NewShippingcompanyComponent;
  let fixture: ComponentFixture<NewShippingcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewShippingcompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewShippingcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
