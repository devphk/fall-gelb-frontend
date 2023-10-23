import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhkSearchResultComponent } from './phk-search-result.component';

describe('PhkSearchResultComponent', () => {
  let component: PhkSearchResultComponent;
  let fixture: ComponentFixture<PhkSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhkSearchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhkSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
