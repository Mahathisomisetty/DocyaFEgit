import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
export interface data {
  serialno: number;
  doctor: string;
  date: Date;
  
  status:string,
 

}
const ELEMENT_DATA: data[] = [
  {serialno:1, doctor:'Karl', date:new Date ,status:'visited'},
  {serialno:2, doctor:'Parameshwar', date:new Date ,status:'not visited'},
  {serialno:3, doctor:'Kamesh', date:new Date , status:'visited'},

];
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  currentDate: Date

  constructor(private dialog: MatDialog, ) {
    this.currentDate = new Date();
  }

  displayedColumns: string[] = ['serialno','doctor','date','status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  title ='angular-dialog';

  openDialog(): void {
    const dialogRef = this.dialog.open(BookappointmentComponent, {
      data: { selectedDate: new Date() } // You can pass initial selected date if needed
    });

    dialogRef.afterClosed().subscribe((result: Date) => {
      if (result) {
        // Handle the selected date
        console.log('Selected Date: ', result);
      }
    });
  }
  
}
