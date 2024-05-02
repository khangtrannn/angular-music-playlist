import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-playlist',
  template: `
    <div class="tw-mt-[40px] tw-w-[600px] tw-mx-auto">
      <a [routerLink]="'/'">Homepage</a>
      <h1>Playlist</h1>

      <img style="view-transition-name: khang;" width="600" height="600" src="/khangtrann.jpeg" />
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class PlaylistComponent {}

@Component({
  selector: 'app-homepage',
  template: `
    <div class="tw-mt-[40px] tw-w-[600px] tw-mx-auto">
    <a [routerLink]="'/playlists/9'">Playlist</a>
      <h1>Homepage</h1>

      <img style="view-transition-name: khang;" width="360" height="360" src="/khangtrann.jpeg" />
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class HomepageComponent {}
