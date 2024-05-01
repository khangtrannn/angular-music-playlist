import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Playlist } from '../../../playlists.model';
import { BackgroundVideoComponent } from '../background-video/background-video.component';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardMediaComponent } from '../card-media/card-media.component';
import { CardStatsComponent } from '../card-stats/card-stats.component';
import { FloatingSquaresComponent } from '../floating-squares/floating-squares.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [
    CardHeaderComponent,
    CardStatsComponent,
    CardMediaComponent,
    FloatingSquaresComponent,
    BackgroundVideoComponent,
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  playlist = input.required<Playlist>();
}
