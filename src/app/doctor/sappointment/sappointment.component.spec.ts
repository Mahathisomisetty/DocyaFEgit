import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SappointmentComponent } from './sappointment.component';

describe('SappointmentComponent', () => {
  let component: SappointmentComponent;
  let fixture: ComponentFixture<SappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SappointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
