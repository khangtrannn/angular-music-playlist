import { ChangeDetectionStrategy, Component, ElementRef, effect, inject, input, viewChild } from "@angular/core";
import { ViewTransitionService } from "../../services/view-transition.service";
import { Media } from "../../../playlists.model";

@Component({
  selector: 'app-background-video',
  template: `
    <div data-persist-container="true">
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

  protected video = viewChild<ElementRef<HTMLVideoElement>>('video');

  #viewTransitionService = inject(ViewTransitionService);

  #persistElementEffect = effect(() => {
    if (this.video()) {
      this.#viewTransitionService.setPersistElement(this.media().url, this.video()!.nativeElement);
    }
  }, { allowSignalWrites: true });
}
