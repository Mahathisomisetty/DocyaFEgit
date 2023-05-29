import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VprescriptionComponent } from './vprescription.component';

describe('VprescriptionComponent', () => {
  let component: VprescriptionComponent;
  let fixture: ComponentFixture<VprescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VprescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
