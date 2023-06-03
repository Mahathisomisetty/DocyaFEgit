import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpprofileComponent } from './editpprofile.component';

describe('EditpprofileComponent', () => {
  let component: EditpprofileComponent;
  let fixture: ComponentFixture<EditpprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
