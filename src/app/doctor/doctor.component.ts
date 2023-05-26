import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  
  currentTime: Date;
  greetingMessage!: string;

  constructor() {
    this.currentTime = new Date();
    this.setGreetingMessage();
  }

  setGreetingMessage() {
    const currentHour = this.currentTime.getHours();

    if (currentHour < 12) {
      this.greetingMessage = 'Good morning!';
    } else if (currentHour < 18) {
      this.greetingMessage = 'Good afternoon!';
    } else {
      this.greetingMessage = 'Good evening!';
    }
  }
}