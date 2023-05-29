import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'ane', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'boomi', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'cat', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'dolly', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'eliven', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'fazi', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'gopi', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'honey', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'iloveu', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-vprescription',
  templateUrl: './vprescription.component.html',
  styleUrls: ['./vprescription.component.css']
})
export class VprescriptionComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
 

}
