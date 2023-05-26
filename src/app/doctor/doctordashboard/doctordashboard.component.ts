import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface PeriodicElement {
  name: string;
  token: number;
  bookedon: string;
  notes: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {token: 1, name: 'sam', bookedon: '26-6-2023', notes: 'i am having high fever from two days and feeling tired'},
  {token: 2, name: 'jin', bookedon: '26-6-2023', notes: 'i am having high fever from two days and feeling tired'},
  {token: 3, name: 'jack', bookedon: '26-6-2023', notes: 'i am having high fever from two days and feeling tired'},
  {token: 4, name: 'bob', bookedon: '26-6-2023', notes: 'i am having high fever from two days and feeling tired'},
  {token: 5, name: 'ram', bookedon: '26-6-2023', notes: 'i am having high fever from two days and feeling tired'},
  
];
@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent {
  currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }
  displayedColumns: string[] = ['token', 'name', 'bookedon', 'notes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
