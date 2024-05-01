import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { User } from '../../../playlists.model';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHeaderComponent {
  user = input.required<User>();
}
