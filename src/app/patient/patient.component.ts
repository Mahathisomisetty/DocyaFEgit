import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
export interface data {
  serialno: number;
  doctor: string;
  date: Date;
  disease: string;
  prescription:string,
 

}
const ELEMENT_DATA: data[] = [
  {serialno:1, doctor:'Karl', date:new Date ,disease:'A disease is a particular abnormal condition that negatively affects the structure or function of all or part of an organism.',prescription:'The active part of the medicine is contained inside a plastic shell that dissolves slowly in the stomach.'},
  {serialno:2, doctor:'Parameshwar', date:new Date ,disease:'To feel pain or distress, sustain injury or harm, suffer from arthritis, made the people suffer for their disloyalty.',prescription:'The medication is Penicillin VK and your healthcare provider ordered one 250 milliliter (ml) bottle, which is about 8 ounces.'},
  {serialno:3, doctor:'Kamesh', date:new Date ,disease:' feel (something painful, injurious, or unpleasant), suffer a heart attack, suffer a debilitating illness, suffer pain.',prescription:'The medication is Penicillin VK and your healthcare provider ordered one 250 milliliter (ml) bottle, which is about 8 ounces.'},

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

  displayedColumns: string[] = ['serialno','doctor','date','disease','prescription'];
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
