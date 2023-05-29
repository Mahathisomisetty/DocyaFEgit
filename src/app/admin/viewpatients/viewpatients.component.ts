import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog} from '@angular/material/dialog';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { AddnurseComponent } from '../addnurse/addnurse.component';
export interface PeriodicElement {
  name: string;
  no: number;
  emailid: string;
  bloodgruop: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, name: 'sam', emailid:'sam@gmail.com', bloodgruop: 'o+'},
  {no: 2, name: 'Raj', emailid:'raj@gmail.com', bloodgruop: 'o-'},
  {no: 3, name: 'Jack', emailid:'jack@gmail.com', bloodgruop: 'A+'},
  {no: 4, name: 'Mars', emailid:'mars@gmail.com', bloodgruop: 'B+'},
  {no: 5, name: 'Mike', emailid:'mike@gmail.com', bloodgruop: 'AB+'},
 
];
@Component({
  selector: 'app-viewpatients',
  templateUrl: './viewpatients.component.html',
  styleUrls: ['./viewpatients.component.css']
})
export class ViewpatientsComponent {
  displayedColumns: string[] = ['no', 'name', 'emailid', 'bloodgruop'];
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
