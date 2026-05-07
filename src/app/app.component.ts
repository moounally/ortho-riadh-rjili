import { Component, AfterViewInit, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { HeaderComponent } from './components/headerComponent/header.component';
import { FooterComponent } from './components/footerComponent/footer.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { filter } from 'rxjs/operators';

// Métadonnées SEO par route
const PAGE_META: Record<string, { description: string; canonical: string }> = {
  '/': {
    description: 'Dr. Riadh Rjili, orthodontiste à Médenine. Appareils dentaires, Invisalign, aligneurs transparents. Consultations pour enfants, adolescents et adultes. RDV sur Med.tn.',
    canonical: 'https://dr-riadh-rjili.tn/'
  },
  '/traitements': {
    description: 'Découvrez tous les traitements orthodontiques proposés à Médenine : appareils dentaires, Invisalign, bagues céramiques, mini-vis. Cabinet Dr. Riadh Rjili.',
    canonical: 'https://dr-riadh-rjili.tn/traitements'
  },
  '/galerie': {
    description: 'Galerie de cas cliniques avant/après. Résultats orthodontiques du cabinet Dr. Riadh Rjili à Médenine, Tunisie.',
    canonical: 'https://dr-riadh-rjili.tn/galerie'
  },
  '/questions-frequentes': {
    description: 'Questions fréquentes sur l\'orthodontie à Médenine : âge de consultation, durée des traitements, coût, Invisalign. Réponses du Dr. Riadh Rjili.',
    canonical: 'https://dr-riadh-rjili.tn/questions-frequentes'
  },
  '/contact': {
    description: 'Contacter le Dr. Riadh Rjili, orthodontiste à Médenine. Prendre rendez-vous, voir l\'adresse et les horaires du cabinet.',
    canonical: 'https://dr-riadh-rjili.tn/contact'
  }
};

declare const gtag: Function;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'RiadhOrthodontie';

  private router = inject(Router);
  private meta = inject(Meta);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      const navEnd = event as NavigationEnd;
      setTimeout(() => this.initRevealObserver(), 200);
      this.updatePageMeta(navEnd.urlAfterRedirects);
    });
  }

  ngAfterViewInit() {
    this.initRevealObserver();
  }

  private updatePageMeta(url: string): void {
    // Extraire le chemin sans query params
    const path = url.split('?')[0];
    const pageMeta = PAGE_META[path] || PAGE_META['/'];

    // Mettre à jour la meta description
    this.meta.updateTag({ name: 'description', content: pageMeta.description });
    this.meta.updateTag({ property: 'og:description', content: pageMeta.description });
    this.meta.updateTag({ property: 'og:url', content: pageMeta.canonical });

    // Mettre à jour le canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', pageMeta.canonical);
    }
  }

  private initRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.08 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));
  }

  trackWhatsApp(): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'floating_button'
      });
    }
  }
}
