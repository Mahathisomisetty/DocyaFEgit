import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { VprescriptionComponent } from '../vprescription/vprescription.component';

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
  selector: 'app-patienthistory',
  templateUrl: './patienthistory.component.html',
  styleUrls: ['./patienthistory.component.css']
})
export class PatienthistoryComponent {
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
}
