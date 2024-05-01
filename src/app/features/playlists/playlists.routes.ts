import { Routes } from "@angular/router";

export default <Routes>[
  {
    path: '',
    loadComponent: async () => (await import('./playlists.component')).PlaylistsComponent,
  }
]
