import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { AddnurseComponent } from '../addnurse/addnurse.component';
export interface viewnurse {
  name: string;
  id: number;
  contact: number;
  emailid: string;
}

const ELEMENT_DATA: viewnurse[] = [
  {id: 1, name: 'samyuktha', contact: 9765432109, emailid: 'samyuktha@nurse.com'},
  {id: 2, name: 'sundar', contact: 9765432109, emailid: 'sundar@nurse.com'},
  {id: 3, name: 'olivia', contact: 9765432109, emailid: 'olivia@nurse.com'},
  {id: 4, name: 'sophila', contact: 9765432109, emailid: 'sophia@nurse.com'},
  {id: 5, name: 'bella', contact: 9765432109, emailid: 'bella@nurse.com'},
  {id: 6, name: 'jute', contact: 9765432109, emailid: 'jute@nurse.com'},
  
];
@Component({
  selector: 'app-viewnurse',
  templateUrl: './viewnurse.component.html',
  styleUrls: ['./viewnurse.component.css']
})
export class ViewnurseComponent {
  displayedColumns: string[] = ['id', 'name', 'emailid','contact'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  title ='angular-dialog';
  constructor(public MatDialog: MatDialog) {}

  openDialog() {
    

    this.MatDialog.open(AdddoctorComponent,{

    }),
    this.MatDialog.open(AddnurseComponent,{

    })
  }
}
