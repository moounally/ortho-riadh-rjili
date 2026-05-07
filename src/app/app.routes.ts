import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes),
    title: 'Dr. Riadh Rjili | Orthodontiste à Médenine, Tunisie'
  },
  // ─── Routes françaises (SEO-friendly) ───────────────────────────────────
  {
    path: 'traitements',
    loadChildren: () => import('./treatment/treatment.routes').then(m => m.treatmentRoutes),
    title: 'Traitements Orthodontiques | Dr. Riadh Rjili à Médenine'
  },
  {
    path: 'galerie',
    loadChildren: () => import('./gallery/gallery.routes').then(m => m.galleryRoutes),
    title: 'Galerie Avant/Après | Cabinet Dr. Riadh Rjili Médenine'
  },
  {
    path: 'conseils',
    loadChildren: () => import('./conseils/conseils.routes').then(m => m.conseilsRoutes),
    title: 'Conseils Orthodontiques | Dr. Riadh Rjili Médenine'
  },
  {
    path: 'questions-frequentes',
    loadChildren: () => import('./qsts/qsts.routes').then(m => m.qstsRoutes),
    title: 'Questions Fréquentes Orthodontie | Dr. Riadh Rjili Médenine'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.routes').then(m => m.contactRoutes),
    title: 'Contact & Rendez-vous | Dr. Riadh Rjili Orthodontiste Médenine'
  },
  // ─── Redirects des anciennes routes anglaises (backwards compatibility) ─
  {
    path: 'treatment',
    redirectTo: 'traitements',
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    redirectTo: 'galerie',
    pathMatch: 'full'
  },
  {
    path: 'qsts',
    redirectTo: 'questions-frequentes',
    pathMatch: 'full'
  },
  // ─── Wildcard 404 ────────────────────────────────────────────────────────
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
