import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Media } from '../../../../playlists.model';
import { PlayerControlsComponent } from '../../../../shared/ui/player-controls/player-controls.component';

@Component({
  selector: 'app-playlist-media',
  standalone: true,
  template: `
    <div class="playlist-media">
      @if (media().type === 'image') {
        <img [src]="media().url" [alt]="title()" class="playlist-image" />
      } @else {
        <div data-persist-container="true">
            <video loop muted autoplay playsinline class="playlist-image" data-persist="true">
              <source [src]="media().url" type="video/mp4" />
            </video>
          </div>
      }

      <app-player-controls [showExtraButtons]="true" />
    </div>
  `,
  styleUrl: './playlist-media.component.scss',
  imports: [PlayerControlsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistMediaComponent {
  id = input.required<string>();
  media = input.required<Media>();
  title = input.required<string>();
}
