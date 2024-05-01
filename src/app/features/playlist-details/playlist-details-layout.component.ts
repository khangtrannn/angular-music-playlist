import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TracksComponent } from './tracks/tracks.component';

@Component({
  selector: 'app-playlist-details-layout',
  standalone: true,
  template: `
    <div class="with-transition tw-max-w-[600px] tw-mx-auto">
      <app-tracks />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TracksComponent],
})
export class PlaylistDetailsLayoutComponent {}
