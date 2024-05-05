import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Playlist } from '../../../playlists.model';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardMediaComponent } from '../card-media/card-media.component';
import { CardStatsComponent } from '../card-stats/card-stats.component';
import { ViewTransitionService } from '../../services/view-transition.service';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <a
      class="card"
      [style.--backgroundColor]="playlist().backgroundColor"
      [style.--textColor]="playlist().textColor"
      [style.--backgroundImage]="playlist().backgroundImage"
      [style.--secondaryTextColor]="playlist().secondaryTextColor"
      [style.--playlist-background]="'playlist-background-' + playlist().id"
      [routerLink]="'/playlists/' + playlist().id"
    >
      <div class="solid-background playlist-background"></div>

      <app-card-header [user]="playlist().user" />

      <h2 class="playlist-title">{{ playlist().title }}</h2>

      <app-card-stats [stats]="playlist().stats" />

      <app-card-media [id]="playlist().id" [media]="playlist().media" [title]="playlist().title" />
    </a>
  `,
  styleUrls: ['./card.component.scss'],
  imports: [
    CardHeaderComponent,
    CardStatsComponent,
    CardMediaComponent,
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
