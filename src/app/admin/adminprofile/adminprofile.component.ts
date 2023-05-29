import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { AddnurseComponent } from '../addnurse/addnurse.component';
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {
  title ='angular-dialog';
  constructor(public MatDialog: MatDialog) {}

  openDialog() {
    

    this.MatDialog.open(AdddoctorComponent,{

    }),
    this.MatDialog.open(AddnurseComponent,{

    })
  }
}
