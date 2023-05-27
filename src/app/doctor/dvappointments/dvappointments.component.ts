import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface PeriodicElement {
  name: string;
  tokenno: number;
  bookedon: string;
  symbol: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {tokenno: 1, name: 'sam', bookedon: '27/05/2023', symbol: 'with fever'},
  {tokenno: 2, name: 'jam', bookedon:'27/05/2023', symbol: 'with fever'},
  {tokenno: 3, name: 'Laren', bookedon:' 27/05/2023', symbol: 'with fever'},
  {tokenno: 4, name: 'Berlyn', bookedon:' 27/05/2023', symbol: 'with fever'},
  {tokenno: 5, name: 'jack', bookedon:'27/05/2023', symbol: 'with fever'},
  
];
@Component({
  selector: 'app-dvappointments',
  templateUrl: './dvappointments.component.html',
  styleUrls: ['./dvappointments.component.css']
})
export class DvappointmentsComponent {
  displayedColumns: string[] = ['tokenno', 'name', 'bookedon', 'symbol','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onButtonClicked(row: any) {
    // handle button click for the specific row
  }
}
