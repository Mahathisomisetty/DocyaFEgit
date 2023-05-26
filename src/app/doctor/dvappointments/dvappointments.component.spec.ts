import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvappointmentsComponent } from './dvappointments.component';

describe('DvappointmentsComponent', () => {
  let component: DvappointmentsComponent;
  let fixture: ComponentFixture<DvappointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvappointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
