import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-playlist-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './playlist-header.component.html',
  styleUrl: './playlist-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistHeaderComponent {
  avatar = input.required<string>();
  name = input.required<string>();
  date = input.required<string>();
}
