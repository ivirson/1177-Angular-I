import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact: { email?: string; message?: string } = {
    email: 'email@email.com',
    message: 'Minha mensagem',
  };

  onSubmit(): void {
    console.log(this.contact);
  }
}
