import { Component, input } from '@angular/core';
import { Playlist } from '../../../../playlists.model';
import { CardHeaderComponent } from '../card-header/card-header.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CardHeaderComponent],
})
export class CardComponent {
  playlist = input.required<Playlist>();
}
