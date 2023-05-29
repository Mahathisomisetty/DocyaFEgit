import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
@Component({
  selector: 'app-addnurse',
  templateUrl: './addnurse.component.html',
  styleUrls: ['./addnurse.component.css']
})
export class AddnurseComponent {
  title ='angular-dialog';
  constructor(public MatDialog: MatDialog) {}

  openDialog() {
    

    this.MatDialog.open(AdddoctorComponent,{

    }),
    this.MatDialog.open(AddnurseComponent,{

    })
  }
  
}
