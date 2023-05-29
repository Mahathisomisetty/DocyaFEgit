import { Component, Inject, ViewEncapsulation  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css'],
  encapsulation: ViewEncapsulation.None
 
})
export class BookappointmentComponent {
  selectedDate!: Date;

  constructor(
    public dialogRef: MatDialogRef<BookappointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Set initial date if provided
    if (data && data.selectedDate) {
      this.selectedDate = data.selectedDate;
    }
  }

  onDateSelected(): void {
    this.dialogRef.close(this.selectedDate);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
