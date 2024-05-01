import { Routes } from "@angular/router";

export default <Routes>[
  {
    path: '',
    loadComponent: async () => (await import('./playlist-details-layout.component')).PlaylistDetailsLayoutComponent,
  }
]
