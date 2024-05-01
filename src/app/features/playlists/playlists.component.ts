import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PLAYLISTS } from '../../data';
import { CardComponent } from '../../shared/ui/card/card.component';
import { HeaderComponent } from '../../shared/ui/header/header.component';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
  standalone: true,
  imports: [CardComponent, HeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistsComponent {
  playlists = PLAYLISTS;
}
