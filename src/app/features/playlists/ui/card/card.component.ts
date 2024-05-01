import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Playlist } from '../../../../playlists.model';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardStatsComponent } from '../card-stats/card-stats.component';
import { CardMediaComponent } from '../card-media/card-media.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CardHeaderComponent, CardStatsComponent, CardMediaComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  playlist = input.required<Playlist>();
}
