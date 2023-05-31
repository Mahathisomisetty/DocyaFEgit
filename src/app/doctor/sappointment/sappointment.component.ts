import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { VprescriptionComponent } from 'src/app/patient/vprescription/vprescription.component';
import { NewobservationComponent } from '../newobservation/newobservation.component';
import { EditpresComponent } from '../editpres/editpres.component';

export interface data {
  id: number;
  test:string;
  status: string;
  remarks: string;
}
const ELEMENT_DATA: data[] = [
  {id:1, test:'Blood Test', status:'Below Average' ,remarks:'Normal'},
  {id:2, test:'Thyroid Test', status:'Below Average' ,remarks:'Normal'},
  {id:3, test:'Sugar Test', status:'Below Average' ,remarks:'Normal'},
  

];
@Component({
  selector: 'app-sappointment',
  templateUrl: './sappointment.component.html',
  styleUrls: ['./sappointment.component.css']
})
export class SappointmentComponent {
  currentDate: string;

  constructor(
    public dialog:MatDialog,
  ) {
    this.currentDate = new Date().toLocaleDateString(); // Get the current date
  }
  displayedColumns: string[] = ['id','test','status','remarks'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  

  openDialog() {
    this.dialog.open(VprescriptionComponent);
  }
  openDialogBox8(): void {
    const dialogRef = this.dialog.open(NewobservationComponent, {
      width: '500px',
      disableClose: true,
    });
  }
  openDialogBox7(): void {
    const dialogRef = this.dialog.open(EditpresComponent, {
      width: '500px',
      disableClose: true,
    });
  }
}
