import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name!: string;
  email!: string;
  subject!: string;
  message!: string; 

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.name, this.email, this.subject, this.message);
    // You can send the form data to your backend or perform any other actions here
  }

}
