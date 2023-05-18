import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import {FormControl} from '@angular/forms';
import {MatDrawerMode} from '@angular/material/sidenav';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LoginComponent);
  }
 
}
