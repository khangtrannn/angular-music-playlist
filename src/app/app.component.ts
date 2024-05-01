import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './ui/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <router-outlet />
  `,
  imports: [RouterOutlet, HeaderComponent],
})
export class AppComponent {}
