import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewTransitionService {
  #prevPageScroll = signal<number | undefined>(undefined);
  #activePlaylist = signal<string | undefined>(undefined);
  #persistElement = signal<Map<string, HTMLElement>>(new Map());

  prevPageScroll = this.#prevPageScroll.asReadonly();
  activePlaylist = this.#activePlaylist.asReadonly();
  persistElement = this.#persistElement.asReadonly();

  setActivePlaylist(activePlaylist: string | undefined): void {
    this.#activePlaylist.set(activePlaylist);
  }

  setPrevPageScroll(scrollTop: number): void {
    this.#prevPageScroll.set(scrollTop);
  }

  setPersistElement(id: string, element: HTMLElement): void {
    this.#persistElement.update((persistElement) => {
      persistElement.set(id, element);
      return persistElement;
    });
  }
}
