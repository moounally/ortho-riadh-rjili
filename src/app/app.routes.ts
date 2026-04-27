import { Routes } from '@angular/router';

export const routes: Routes = [{
    path : '',
    loadChildren : () => import('./home/home.routes').then(m => m.homeRoutes)
},
{
    path : 'gallery',
    loadChildren : () => import('./gallery/gallery.routes').then(m => m.galleryRoutes)
},
{
    path : 'treatment',
    loadChildren : () => import('./treatment/treatment.routes').then(m => m.treatmentRoutes)
},
{
    path : 'qsts',
    loadChildren : () => import('./qsts/qsts.routes').then(m => m.qstsRoutes)
},
{
    path : 'contact',
    loadChildren : () => import('./contact/contact.routes').then(m => m.contactRoutes)
}];
