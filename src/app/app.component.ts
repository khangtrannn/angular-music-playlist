import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header/header.component';
import { ViewTransitionService } from './shared/services/view-transition.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="tw-min-h-[100vh]">
      <router-outlet />
    </div>

    <footer class="tw-py-[40px] tw-w-full tw-text-center tw-mx-auto">
      <div>Made with ❤️ by <span class="tw-font-semibold">Khang Tran</span></div>
    </footer>
  `,
  imports: [RouterOutlet, HeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  viewTransitionService = inject(ViewTransitionService);

  constructor() {
    this.viewTransitionService.initViewTransitionHandle();
  }
}
