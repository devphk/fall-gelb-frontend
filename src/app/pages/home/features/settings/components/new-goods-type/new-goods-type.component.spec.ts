import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGoodsTypeComponent } from './new-goods-type.component';

describe('NewGoodsTypeComponent', () => {
  let component: NewGoodsTypeComponent;
  let fixture: ComponentFixture<NewGoodsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGoodsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGoodsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
