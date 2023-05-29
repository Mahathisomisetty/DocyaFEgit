import { Component } from '@angular/core';

@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.css']
})
export class FpasswordComponent {
  // email: string = '';
  // emailExists: boolean = false;

  // onSubmit() {
    // Check if the email exists (you can replace this with your own logic)
    // Assume the email exists if it is "test@example.com"
  //   if (this.email === 'test@example.com') {
  //     this.emailExists = true;
  //   } else {
  //     this.emailExists = false;
  //   }
  // }
  email: string = '';
  emailExists: boolean = false;

  onSubmit() {
    // Check if the email exists (you can replace this with your own logic)
    // Assume the email exists if it is "example@mail.com"
    if (this.email === 'example@mail.com') {
      this.emailExists = true;
    } else {
      this.emailExists = false;
    }
  }
}
