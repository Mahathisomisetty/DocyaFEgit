import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import {FormControl} from '@angular/forms';
import {MatDrawerMode} from '@angular/material/sidenav';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { AddnurseComponent } from './addnurse/addnurse.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title ='angular-dialog';
  constructor(public MatDialog: MatDialog) {
    this.currentTime = new Date();
    this.setGreetingMessage();
  }

  openDialog() {
    

    this.MatDialog.open(AdddoctorComponent,{

    }),
    this.MatDialog.open(AddnurseComponent,{

    })
  }
  currentTime: Date;
  greetingMessage!: string;

  
  setGreetingMessage() {
    const currentHour = this.currentTime.getHours();

    if (currentHour < 12) {
      this.greetingMessage = 'Good morning!';
    } else if (currentHour < 17) {
      this.greetingMessage = 'Good afternoon!';
    } else {
      this.greetingMessage = 'Good evening!';
    }
  }
 
}
