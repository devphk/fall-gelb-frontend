import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContainerTypeComponent } from './new-container-type.component';

describe('NewContainerTypeComponent', () => {
  let component: NewContainerTypeComponent;
  let fixture: ComponentFixture<NewContainerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContainerTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewContainerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
