import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsolidatorComponent } from './new-consolidator.component';

describe('NewConsolidatorComponent', () => {
  let component: NewConsolidatorComponent;
  let fixture: ComponentFixture<NewConsolidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConsolidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewConsolidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
