import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BookappointmentComponent } from '../bookappointment/bookappointment.component';
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
  selector: 'app-patientdb',
  templateUrl: './patientdb.component.html',
  styleUrls: ['./patientdb.component.css']
})
export class PatientdbComponent {
  currentDate: Date

  constructor(private dialog: MatDialog, ) {
    this.currentDate = new Date();
    this.currentTime = new Date();
    this.setGreetingMessage();
  }

  displayedColumns: string[] = ['serialno','doctor','date','status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  title ='angular-dialog';
  currentTime: Date;
  greetingMessage!: string;

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
