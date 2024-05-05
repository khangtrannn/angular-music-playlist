import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewTransitionService {
  #prevPageScroll = undefined;

  #activePlaylist = signal<string | undefined>(undefined);
  activePlaylist = this.#activePlaylist.asReadonly();

  setActivePlaylist(activePlaylist: string | undefined): void {
    this.#activePlaylist.set(activePlaylist);
  }

  initViewTransitionHandle(): void {
    console.log('init view transition handle');
  }

  private handlePlaylistTransition(): void {
    console.log('handle playlist transition 🎸');
  }

  private handleHomepageTransition(): void {
    console.log('handle homepage transition 🎆');
  }
}
