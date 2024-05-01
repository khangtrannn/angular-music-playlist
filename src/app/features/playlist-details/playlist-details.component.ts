import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
} from '@angular/core';
import { PLAYLISTS } from '../../data';
import { TracksComponent } from './tracks/tracks.component';
import { FloatingSquaresComponent } from '../../shared/ui/floating-squares/floating-squares.component';
import { BackgroundVideoComponent } from '../../shared/ui/background-video/background-video.component';
import { CardHeaderComponent } from '../../shared/ui/card-header/card-header.component';
import { CardStatsComponent } from '../../shared/ui/card-stats/card-stats.component';
import { PlaylistMediaComponent } from './ui/playlist-media/playlist-media.component';
import { PlaylistHeaderComponent } from './ui/playlist-header/playlist-header.component';

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
          @if (playlist()!.backgroundAnimation === 'floatingSquares') {
            <app-floating-squares />
          } @else if (playlist()!.backgroundAnimation === 'purpleVideo') {
            <app-background-video />
          } @else {
            <div class="solid-background playlist-background"></div>
          }

          <app-playlist-header
            [name]="playlist().user.name"
            [avatar]="playlist().user.avatar"
            [date]="playlist().user.date" />

          <h2 class="playlist-title">{{ playlist()!.title }}</h2>
          <app-card-stats [stats]="playlist()!.stats" />
          <p class="playlist-description">{{ playlist()!.description }}</p>
          <app-playlist-media [media]="playlist().media" [title]="playlist().title" />
        </header>

        <app-tracks />
      </main>
    }
  `,
  styleUrls: ['./playlist-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TracksComponent,
    FloatingSquaresComponent,
    BackgroundVideoComponent,
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
}
