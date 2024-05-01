import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';
import { Media } from '../../../../playlists.model';
import { PlayerControlsComponent } from '../player-controls/player-controls.component';

@Component({
  selector: 'app-card-media',
  templateUrl: './card-media.component.html',
  styleUrls: ['./card-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PlayerControlsComponent],
})
export class CardMediaComponent {
  title = input.required<string>();
  backgroundColor = input.required<string>();
  media = input.required<Media>();
}
