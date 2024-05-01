import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';
import { Stats } from '../../../../playlists.model';

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CardStatsComponent {
  stats = input.required<Stats>();
}
