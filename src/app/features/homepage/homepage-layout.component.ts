import { Component } from "@angular/core";
import { HeaderComponent } from "../../ui/header.component";
import { PlaylistsComponent } from "./playlists/playlists.component";

@Component({
  selector: 'app-homepage',
  template: `
    <app-header />
    <div class="tw-max-w-[600px] tw-mx-auto">
      <app-playlists />
    </div>
  `,
  standalone: true,
  imports: [HeaderComponent, PlaylistsComponent],
})
export class HomepageLayoutComponent {}
