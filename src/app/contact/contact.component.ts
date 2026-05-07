import { Component } from '@angular/core';
import { ContactBarreComponent } from '../components/contactBarreComponent/contactBarre.component';
import { FormsModule } from '@angular/forms';

declare const gtag: Function;

@Component({
  selector: 'contact-component',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [ContactBarreComponent, FormsModule],
})
export class ContactComponent {
  nom = '';
  prenom = '';
  tel = '';
  email = '';
  date = '';
  periode = '';
  message = '';

  onSubmit(): void {
    // Construire le message WhatsApp à partir du formulaire
    const lines: string[] = [
      'Bonjour Dr Riadh Rjili,',
      '',
      `Nom : ${this.prenom} ${this.nom}`,
    ];

    if (this.tel) lines.push(`Tél : ${this.tel}`);
    if (this.email) lines.push(`Email : ${this.email}`);
    if (this.date) lines.push(`Date souhaitée : ${this.date}`);
    if (this.periode) lines.push(`Période : ${this.periode === 'matin' ? 'Matin (08h-12h)' : 'Après-midi (14h-18h)'}`);
    if (this.message) {
      lines.push('');
      lines.push(`Message : ${this.message}`);
    }

    const waMessage = encodeURIComponent(lines.join('\n'));
    const waUrl = `https://wa.me/21655580320?text=${waMessage}`;

    // Tracking Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'contact_form_submit', {
        event_category: 'engagement',
        event_label: 'contact_page'
      });
    }

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  trackMedTn(): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'medtn_click', {
        event_category: 'engagement',
        event_label: 'contact_page'
      });
    }
  }
}
