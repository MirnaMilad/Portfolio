import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  imports: [],
  templateUrl: './copyright.html',
  styleUrl: './copyright.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Copyright {
  currentYear: number = new Date().getFullYear();
}
