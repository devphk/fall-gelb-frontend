import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomsComponent } from './new-customs.component';

describe('NewCustomsComponent', () => {
  let component: NewCustomsComponent;
  let fixture: ComponentFixture<NewCustomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCustomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCustomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
