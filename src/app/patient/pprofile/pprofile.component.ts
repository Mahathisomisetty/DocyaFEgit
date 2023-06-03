import { Component } from '@angular/core';
import { EditpprofileComponent } from '../editpprofile/editpprofile.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-pprofile',
  templateUrl: './pprofile.component.html',
  styleUrls: ['./pprofile.component.css']
})
export class PprofileComponent {
  title ='angular-dialog';
  constructor(private dialog: MatDialog) {}
  openDialogBox9(): void {
    const dialogRef = this.dialog.open(EditpprofileComponent, {
      width: '500px',
      disableClose: true,
    });
  }
}
