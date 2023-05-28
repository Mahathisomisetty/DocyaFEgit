import { Component } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-viewappointments',
  templateUrl: './viewappointments.component.html',
  styleUrls: ['./viewappointments.component.css']
})
export class ViewappointmentsComponent {
  currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }
}
