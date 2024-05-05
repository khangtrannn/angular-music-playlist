import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Media } from '../../../playlists.model';
import { PlayerControlsComponent } from '../player-controls/player-controls.component';
import { BackgroundVideoComponent } from '../background-video/background-video.component';

@Component({
  selector: 'app-card-media',
  templateUrl: './card-media.component.html',
  styleUrls: ['./card-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PlayerControlsComponent, BackgroundVideoComponent],
})
export class CardMediaComponent {
  id = input.required<string>();
  title = input.required<string>();
  media = input.required<Media>();
}
