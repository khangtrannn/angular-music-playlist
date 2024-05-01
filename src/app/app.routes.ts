import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/playlists/playlists.routes'),
  },
  {
    path: 'playlists/:id',
    loadChildren: () => import('./features/playlist-details/playlist-details.routes'),
  }
];
