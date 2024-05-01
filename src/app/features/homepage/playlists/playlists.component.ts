import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PLAYLISTS } from '../../../data';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
  standalone: true,
  imports: [CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistsComponent {
  playlists = PLAYLISTS.slice(0, 1);
}
