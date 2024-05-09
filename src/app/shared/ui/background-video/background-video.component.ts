import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, Renderer2, inject, input, viewChild } from "@angular/core";
import { Media } from "../../../playlists.model";
import { ViewTransitionService } from "../../services/view-transition.service";

let persistElement: HTMLElement | undefined = undefined;

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
export class BackgroundVideoComponent implements OnInit, OnDestroy {
  id = input.required<string>();
  media = input.required<Media>();

  #viewTransitionService = inject(ViewTransitionService);
  #renderer = inject(Renderer2);

  protected container = viewChild<ElementRef<HTMLDivElement>>('container');
  protected video = viewChild<ElementRef<HTMLVideoElement>>('video');

  ngOnInit(): void {
    if (persistElement && this.id() === this.#viewTransitionService.activePlaylist()) {
      this.#renderer.removeChild(this.container()?.nativeElement, this.video()?.nativeElement);
      this.#renderer.appendChild(this.container()?.nativeElement, persistElement);
      return;
    }

    persistElement = undefined;
  }

  ngOnDestroy(): void {
    if (this.id() === this.#viewTransitionService.activePlaylist() && !persistElement) {
      persistElement = this.video()?.nativeElement;
    }
  }
}
