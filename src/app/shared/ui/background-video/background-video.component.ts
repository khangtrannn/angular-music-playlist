import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Renderer2, effect, inject, input, untracked, viewChild } from "@angular/core";
import { ViewTransitionService } from "../../services/view-transition.service";
import { Media } from "../../../playlists.model";

@Component({
  selector: 'app-background-video',
  template: `
    <div #container data-persist-container="true">
      <video
        #video
        loop
        muted
        autoplay
        playsinline
        class="playlist-image"
        data-persist="true"
        [width]="media().width"
        [height]="media().height"
      >
        <source [src]="media().url" type="video/mp4" />
      </video>
    </div>
  `,
  styles: `
    video.playlist-image {
      display: block;
      max-width: 100%;
      border-radius: 0 0 2rem 2rem;
      min-height: 418px;
      object-fit: cover;
      clip-path: inset(1px 1px);
      margin-bottom: -1px
    }
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundVideoComponent {
  media = input.required<Media>();

  protected container = viewChild<ElementRef<HTMLDivElement>>('container');
  protected video = viewChild<ElementRef<HTMLVideoElement>>('video');

  #viewTransitionService = inject(ViewTransitionService);
  #renderer = inject(Renderer2);

  #persistElementEffect = effect(() => {
    const persistElement = untracked(this.#viewTransitionService.persistElement).get(this.media().url);

    if (persistElement) {
      this.#renderer.removeChild(this.container()?.nativeElement, this.video()?.nativeElement);
      this.#renderer.appendChild(this.container()?.nativeElement, persistElement);
    } else {
      this.#viewTransitionService.setPersistElement(this.media().url, this.video()!.nativeElement);
    }
  }, { allowSignalWrites: true });
}
