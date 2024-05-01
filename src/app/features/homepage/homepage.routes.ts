import { Routes } from "@angular/router";

export default <Routes>[
  {
    path: '',
    loadComponent: async () => (await import('./homepage-layout.component')).HomepageLayoutComponent,
  }
]
