import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PLAYLISTS } from '../../data';
import { ViewTransitionService } from '../../shared/services/view-transition.service';
import { CardComponent } from '../../shared/ui/card/card.component';
import { HeaderComponent } from '../../shared/ui/header/header.component';

@Component({
  selector: 'app-playlists',
  standalone: true,
  template: `
    <app-header />

    <div class="container">
      <div class="tw-max-w-[600px] tw-mx-auto">
        <div class="card-list">
          @for (playlist of playlists; track playlist.id) {
            <app-card [playlist]="playlist" />
          }
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./playlists.component.scss'],
  imports: [CardComponent, HeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistsComponent implements AfterViewInit {
  playlists = PLAYLISTS;
  #viewTransitionService = inject(ViewTransitionService);

  ngAfterViewInit(): void {
    const prevPageScroll = this.#viewTransitionService.prevPageScroll();
    if (prevPageScroll) {
      setTimeout(() => {
        document.documentElement.scrollTop = prevPageScroll
      });
    }
  }
}
