import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Media } from '../../../../playlists.model';
import { PlayerControlsComponent } from '../../../../shared/ui/player-controls/player-controls.component';

@Component({
  selector: 'app-playlist-media',
  standalone: true,
  imports: [PlayerControlsComponent],
  templateUrl: './playlist-media.component.html',
  styleUrl: './playlist-media.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistMediaComponent {
  id = input.required<string>();
  media = input.required<Media>();
  title = input.required<string>();
}
