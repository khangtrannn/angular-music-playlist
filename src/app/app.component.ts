import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header.component';

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
export class AppComponent {}
