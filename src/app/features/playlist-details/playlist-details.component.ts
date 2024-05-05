import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { PLAYLISTS } from '../../data';
import { TracksComponent } from './tracks/tracks.component';
import { CardStatsComponent } from '../../shared/ui/card-stats/card-stats.component';
import { PlaylistMediaComponent } from './ui/playlist-media/playlist-media.component';
import { PlaylistHeaderComponent } from './ui/playlist-header/playlist-header.component';
import { ViewTransitionService } from '../../shared/services/view-transition.service';

@Component({
  selector: 'app-playlist-details',
  standalone: true,
  template: `
    @if (playlist()) {
      <main
        class="playlist-container with-transition"
        [style.--backgroundColor]="playlist().backgroundColor"
        [style.--textColor]="playlist().textColor"
        [style.--backgroundImage]="
          playlist().backgroundImage
            ? 'url(' + playlist().backgroundImage + ')'
            : 'none'
        "
        [style.--secondaryTextColor]="playlist().secondaryTextColor"
      >
        <header>
          <div class="solid-background playlist-background"></div>

          <app-playlist-header
            [name]="playlist().user.name"
            [avatar]="playlist().user.avatar"
            [date]="playlist().user.date" />

          <h2 class="playlist-title">{{ playlist()!.title }}</h2>

          <app-card-stats [stats]="playlist()!.stats" />

          <p class="playlist-description">{{ playlist()!.description }}</p>
          <app-playlist-media [id]="playlist().id" [media]="playlist().media" [title]="playlist().title" />
        </header>

        <app-tracks />
      </main>
    }
  `,
  styleUrls: ['./playlist-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TracksComponent,
    CardStatsComponent,
    PlaylistHeaderComponent,
    PlaylistMediaComponent,
  ],
})
export class PlaylistDetailsComponent {
  id = input<string>();
  playlist = computed(
    () => PLAYLISTS.find((playlist) => playlist.id === this.id())!
  );

  #viewTransitionService = inject(ViewTransitionService);


  #activePlaylistEffect = effect(() => {
      const prevPageScroll = this.#viewTransitionService.prevPageScroll();

      if (prevPageScroll) {
        this.#viewTransitionService.setActivePlaylist(this.id());
      }
    }, { allowSignalWrites: true });
}
