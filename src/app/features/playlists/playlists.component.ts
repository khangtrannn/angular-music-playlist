import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PLAYLISTS } from '../../data';
import { ViewTransitionService } from '../../shared/services/view-transition.service';
import { CardComponent } from '../../shared/ui/card/card.component';
import { HeaderComponent } from '../../shared/ui/header/header.component';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
  standalone: true,
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
