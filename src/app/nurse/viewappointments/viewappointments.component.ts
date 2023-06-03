import { Component } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { AddbasicdetailsComponent } from '../addbasicdetails/addbasicdetails.component';

@Component({
  selector: 'app-viewappointments',
  templateUrl: './viewappointments.component.html',
  styleUrls: ['./viewappointments.component.css']
})
export class ViewappointmentsComponent {
  currentDate: Date;

  constructor(public dialog: MatDialog) {
    this.currentDate = new Date();
  }
  

  openDialog() {
    this.dialog.open(AddbasicdetailsComponent);
  }
}
