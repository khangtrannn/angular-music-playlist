import { ChangeDetectionStrategy, Component, ElementRef, effect, inject, input, viewChild } from '@angular/core';
import { Media } from '../../../../playlists.model';
import { PlayerControlsComponent } from '../../../../shared/ui/player-controls/player-controls.component';
import { BackgroundVideoComponent } from '../../../../shared/ui/background-video/background-video.component';

@Component({
  selector: 'app-playlist-media',
  standalone: true,
  template: `
    <div class="playlist-media">
      @if (media().type === 'image') {
        <img [src]="media().url" [alt]="title()" class="playlist-image" />
      } @else {
        <app-background-video [media]="media()" />
      }

      <app-player-controls [showExtraButtons]="true" />
    </div>
  `,
  styleUrl: './playlist-media.component.scss',
  imports: [PlayerControlsComponent, BackgroundVideoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistMediaComponent {
  id = input.required<string>();
  media = input.required<Media>();
  title = input.required<string>();
}
