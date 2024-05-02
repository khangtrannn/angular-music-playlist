import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('./homepage.component')).HomepageComponent,
  },
  {
    path: 'playlists/:id',
    loadComponent: async () => (await import('./homepage.component')).PlaylistComponent,
  }
];
