import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Playlist } from '../../../playlists.model';
import { BackgroundVideoComponent } from '../background-video/background-video.component';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardMediaComponent } from '../card-media/card-media.component';
import { CardStatsComponent } from '../card-stats/card-stats.component';
import { FloatingSquaresComponent } from '../floating-squares/floating-squares.component';
import { ViewTransitionService } from '../../services/view-transition.service';

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
  host: {
    '(click)': 'handleOnClicked()',
    '[class.with-transition]': 'enabledWithTransition()',
  }
})
export class CardComponent {
  playlist = input.required<Playlist>();

  #viewTransitionService = inject(ViewTransitionService);
  protected readonly enabledWithTransition = computed(() => this.#viewTransitionService.activePlaylist() === this.playlist().id);

  protected handleOnClicked(): void {
    this.#viewTransitionService.setPrevPageScroll(document.scrollingElement!.scrollTop);
    this.#viewTransitionService.setActivePlaylist(this.playlist().id);
  }
}
