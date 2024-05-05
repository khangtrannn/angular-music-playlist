import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewTransitionService {
  #prevPageScroll = signal<number | undefined>(undefined);
  #activePlaylist = signal<string | undefined>(undefined);

  prevPageScroll = this.#prevPageScroll.asReadonly();
  activePlaylist = this.#activePlaylist.asReadonly();

  setActivePlaylist(activePlaylist: string | undefined): void {
    this.#activePlaylist.set(activePlaylist);
  }

  setPrevPageScroll(scrollTop: number): void {
    this.#prevPageScroll.set(scrollTop);
  }
}
