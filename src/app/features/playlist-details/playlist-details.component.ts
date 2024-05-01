import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TracksComponent } from "./tracks/tracks.component";

@Component({
  selector: 'app-playlist-details',
  template: `

  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TracksComponent],
})
export class PlaylistDetailsComponent {}
