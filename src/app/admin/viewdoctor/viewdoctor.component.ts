import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { AddnurseComponent } from '../addnurse/addnurse.component';
export interface PeriodicElement {
  name: string;
  id: number;
  emailid: string;
  speciality: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Ophilia', emailid: 'ophilia@doctor.com', speciality: 'pediatrision'},
  
];

@Component({
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrls: ['./viewdoctor.component.css']
})
export class ViewdoctorComponent {
  displayedColumns: string[] = ['id', 'name', 'emailid', 'speciality'];
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
