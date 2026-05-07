import { Component, OnInit } from '@angular/core';
import { ContactBarreComponent } from '../components/contactBarreComponent/contactBarre.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

// ─── EmailJS Config ───────────────────────────────────────────────────────────
// TODO: Remplacez VOTRE_PUBLIC_KEY par votre clé publique EmailJS
// (Trouvez-la dans : EmailJS Dashboard → Account → General → Public Key)
const EMAILJS_PUBLIC_KEY = 'qp2HKlm9KkQ1ljSoE';
const EMAILJS_SERVICE_ID = 'service_va9cl3c';
const EMAILJS_TEMPLATE_ID = 'template_e5bu2yt';

declare const gtag: Function;

@Component({
  selector: 'contact-component',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [ContactBarreComponent, FormsModule, CommonModule],
})
export class ContactComponent implements OnInit {
  nom = '';
  prenom = '';
  tel = '';
  email = '';
  date = '';
  periode = '';
  message = '';

  // États du formulaire
  isLoading = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  ngOnInit(): void {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  async onSubmit(): Promise<void> {
    if (!this.nom || !this.prenom || !this.tel) return;

    this.isLoading = true;
    this.submitStatus = 'idle';

    // Paramètres envoyés au template EmailJS
    const templateParams = {
      from_name: `${this.prenom} ${this.nom}`,
      phone: this.tel,
      email: this.email || 'Non renseigné',
      desired_date: this.date || 'Non précisée',
      period: this.periode === 'matin' ? 'Matin (08h-12h)' : this.periode === 'apresmidi' ? 'Après-midi (14h-18h)' : 'Non précisée',
      message: this.message || 'Aucun message',
      reply_to: this.email || 'rjiliorthodontics@gmail.com',
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      this.submitStatus = 'success';

      // Tracking Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
          event_label: 'email_sent'
        });
      }

      // Reset du formulaire
      this.nom = '';
      this.prenom = '';
      this.tel = '';
      this.email = '';
      this.date = '';
      this.periode = '';
      this.message = '';

    } catch (error) {
      console.error('EmailJS error:', error);
      this.submitStatus = 'error';
      // Fallback : ouvrir WhatsApp si l'email échoue
      this.openWhatsApp();
    } finally {
      this.isLoading = false;
      // Réinitialiser le statut après 5 secondes
      setTimeout(() => this.submitStatus = 'idle', 5000);
    }
  }

  openWhatsApp(): void {
    const lines: string[] = [
      'Bonjour Dr Riadh Rjili,',
      '',
      `Nom : ${this.prenom} ${this.nom}`,
    ];
    if (this.tel) lines.push(`Tél : ${this.tel}`);
    if (this.date) lines.push(`Date souhaitée : ${this.date}`);
    if (this.message) lines.push(`\nMessage : ${this.message}`);

    const waUrl = `https://wa.me/21655580320?text=${encodeURIComponent(lines.join('\n'))}`;

    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_click', { event_category: 'engagement', event_label: 'contact_form_fallback' });
    }
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  trackMedTn(): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'medtn_click', { event_category: 'engagement', event_label: 'contact_page' });
    }
  }

  trackPhone(): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'phone_click', { event_category: 'engagement', event_label: 'contact_page' });
    }
  }
}
