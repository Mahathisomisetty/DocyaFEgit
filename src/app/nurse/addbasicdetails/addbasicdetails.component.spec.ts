import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbasicdetailsComponent } from './addbasicdetails.component';

describe('AddbasicdetailsComponent', () => {
  let component: AddbasicdetailsComponent;
  let fixture: ComponentFixture<AddbasicdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbasicdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbasicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
