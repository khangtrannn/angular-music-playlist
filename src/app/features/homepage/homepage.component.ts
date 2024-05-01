import { Component } from "@angular/core";
import { HeaderComponent } from "../../ui/header.component";

@Component({
  selector: 'app-homepage',
  template: `
    <app-header />
  `,
  standalone: true,
  imports: [HeaderComponent],
})
export class HomepageComponent {}
