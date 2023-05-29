import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {FormControl} from '@angular/forms';
import {MatDrawerMode} from '@angular/material/sidenav';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AddnurseComponent } from '../addnurse/addnurse.component';
@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent {
  title ='angular-dialog';
  constructor(public MatDialog: MatDialog) {}

  openDialog() {
    

    this.MatDialog.open(AdddoctorComponent,{

    }),
    this.MatDialog.open(AddnurseComponent,{

    })
  }
  
}
