import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-floating-squares',
  templateUrl: './floating-squares.component.html',
  styleUrls: ['./floating-squares.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingSquaresComponent {
  isRounded = input(false);
}
